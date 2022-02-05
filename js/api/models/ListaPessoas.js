export class ListaPessoas {

    constructor(lista=[]) { // constructor() {
        this._pessoas = lista // this._pessoas = []
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    remove(id) {
        this._pessoas.splice(id, 1)
    }

    atualiza(id, pessoaAtualizada) {
        this._pessoas[id] = pessoaAtualizada
    }

    // programacao defensiva retornar uma copia do array
    // usando o concat, passando o nosso array como parametro
    get pessoas() {
        return [].concat(this._pessoas)
    }

}
