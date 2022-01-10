//import { Pessoa } from './api/models/Pessoa.js'
import { PessoaController } from './api/controllers/PessoaController.js'

let pessoaController = new PessoaController()

// CONTROLAR ENVIO DO FORMULARIO E EXIBICAO NA TABELA

let formulario = document.querySelector('form')

// escutador de evento no formulario
formulario.addEventListener('submit', (event) => {
    
    // adicionar pessoa
    pessoaController.adiciona(event)
    
    // limpar formulario
    pessoaController._limpaFormulario()

})
