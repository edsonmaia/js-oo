export class View {

    constructor(elemento) {
        this._elemento = elemento
    }

    template(model) {
        throw new Error('O método template deve ser implementado nesta classe')
    }

    update(model) {
        this._elemento.innerHTML = this.template(model)
    }

}
