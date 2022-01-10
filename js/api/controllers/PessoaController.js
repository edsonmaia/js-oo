import { Pessoa } from '../models/Pessoa.js'
//import { ListaPessoas } from '../models/ListaPessoas.js'
//import { PessoasView } from '../views/PessoasView.js'

export class PessoaController {
    
    // atributos, propriedades
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    // metodos

    // construtor
    constructor () {
        this._inputNome   = document.querySelector('#nome')
        this._inputIdade  = document.querySelector('#idade')
        this._inputPeso   = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')

        // criar lista de pessoas
        //this._listaPessoas = new ListaPessoas()
        
        //this._pessoasView = new PessoasView(document.querySelector('#dados'))
        //this._pessoasView.update(this._listaPessoas)
    }

    // adicionar pessoa
    adiciona(event) {

        event.preventDefault()
        
        // criar uma pessoa
        this._criaPessoa()
        console.log(this._criaPessoa())

        // adicionar nova pessoa na lista
        //this._listaPessoas.adiciona(this._criaPessoa())
        //console.log(this._listaPessoas.pessoas)

        //this._pessoasView.update(this._listaPessoas)

    }
    
    // criar pessoa
    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }
    
    // limpar formulario
    _limpaFormulario() {
        this._inputNome.value   = ''
        this._inputIdade.value  = ''
        this._inputPeso.value   = ''
        this._inputAltura.value = ''
    
        this._inputNome.focus()
    }

}
