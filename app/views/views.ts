export abstract class Views<T> {
    protected element: HTMLElement;
    private escape: boolean;

    constructor(selector: string, escape?: boolean){
        const element = document.querySelector(selector);
        if (element) {
            this.element =  <HTMLInputElement> element;
        } else {
            throw Error (`seletor ${selector} não existe`);
        }
        //element ? this.element = <HTMLInputElement> element : Error(`seletor ${selector} não existe`);
        escape ?  this.escape = escape : false;
        //if (escape) this.escape = escape;
    }

    protected abstract template (model: T): string;

    public update(model: T): void{
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "")
        }
        this.element.innerHTML = template;

    }
}