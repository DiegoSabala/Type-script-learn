export class Views {
    constructor(selector, escape) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`seletor ${selector} não existe`);
        }
        escape ? this.escape = escape : false;
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
