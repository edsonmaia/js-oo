export class Modal {

    constructor(titulo='', texto='') {
        this._titulo = titulo
        this._texto = texto
    }

    get titulo() {
        return this._titulo
    }

    set titulo(titulo) {
        this._titulo = titulo
    }

    get texto() {
        return this._texto
    }

    set texto(texto) {
        this._texto = texto
    }

}
