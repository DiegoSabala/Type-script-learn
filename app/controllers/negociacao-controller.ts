import { Weekday } from "../enums/weekday.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor () {
            this.inputData = <HTMLInputElement> document.querySelector('#data');
            this.inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade")/* as HTMLInputElement */;
            this.inputValor = <HTMLInputElement> document.querySelector('#valor')/* as HTMLInputElement */;
            this.negociacoesView.update(this.negociacoes);
    }

    private businessDay(date : Date ) {
        return date.getDay() > Weekday.DOMINGO
            && date.getDay() < Weekday.SEXTA
    }

    public adiciona (): void {

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.businessDay(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
        
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("negociação adicionada com sucesso!");
    }

}