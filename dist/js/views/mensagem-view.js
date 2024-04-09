import { Views } from "./views.js";
export class MensagemView extends Views {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
