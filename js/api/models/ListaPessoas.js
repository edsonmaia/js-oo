export class ListaPessoas {
	
	constructor() {
		this._pessoas = []
	}

	adiciona(pessoa) {
		this._pessoas.push(pessoa)
	}

	// programacao defensiva retornar um copia do array
    // usando o concat, passando o nosso array como parametro
	get pessoas() {
		//return this._pessoas
		return [].concat(this._pessoas)
	}

}
