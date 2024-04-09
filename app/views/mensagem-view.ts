import { Views } from "./views.js"

export class MensagemView extends Views<string> {

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

}