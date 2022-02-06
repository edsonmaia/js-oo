export class PessoasRepository {

    _getLocalStorage
    _setLocalStorage

    constructor() {
        this._getLocalStorage = () => JSON.parse(localStorage.getItem('db')) ?? []
        this._setLocalStorage = (db) => localStorage.setItem("db", JSON.stringify(db))
        //console.log('Local Storage')
    }

    // CRUD - create read update delete

    // create = criar
    criar(pessoa) {
        let dbPessoa = this._getLocalStorage()

        dbPessoa.push(pessoa)
        this._setLocalStorage(dbPessoa)
    }

    // read = ler
    ler() {
        return this._getLocalStorage()
    }

    // update = atualizar, editar
    atualizar(id, pessoaAtualizada) {
        let dbPessoa = this.ler()

        dbPessoa[id] = pessoaAtualizada
        this._setLocalStorage(dbPessoa)
    }

    // delete
    apagar(id) {
        let dbPessoa = this.ler()

        dbPessoa.splice(id, 1)
        this._setLocalStorage(dbPessoa)
    }

    // ler por id
    lerPorId(id) {
        const dbPessoa = this.ler()
        return dbPessoa[id]
    }

}
