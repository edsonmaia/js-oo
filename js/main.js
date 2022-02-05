import { PessoaController } from './api/controllers/PessoaController.js'

const pessoaController = new PessoaController()

// CONTROLAR ENVIO DO FORMULARIO E EXIBICAO NA TABELA
const formulario = document.querySelector('#formulario')

// escutador de evento no formulario
formulario.addEventListener('submit', (event) => {
    
    // adicionar pessoa
    pessoaController.adiciona(event)
    
    // limpar formulario
    pessoaController._limpaFormulario()

})

////// formulario formApagar
const formApagarEditar = document.querySelector('#formApagarEditar')
const btnApagar = document.querySelector('#btnApagar')
const btnEditar = document.querySelector('#btnEditar')

formApagarEditar.addEventListener('submit', (event) => {
    event.preventDefault()
})

btnApagar.addEventListener('click', () => {
    //console.log('Apagar')

    let id = document.querySelector('#id').value
    console.log('Apagar registro ' + id)

    document.querySelector('#id').value = null

    ////// INTERACOES COM A JANELA MODAL //////
    // abrir janela modal
    openModal(`Deseja apagar o registro ${id} ?`)

    // se cliar no botao sim
    document.querySelector('#sim').addEventListener('click', () => {
        pessoaController.apaga(id)
        closeModal()
        
    })
    ////// INTERACOES COM A JANELA MODAL //////

})

btnEditar.addEventListener('click', () => {
    console.log('Editar')

    // rolar pagina para cima
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    document.querySelector('#nome').focus()

    let id = document.querySelector('#id').value

    console.log('Editar registro ' + id)

    document.querySelector('#idPessoa').value = id
    document.querySelector('#id').value = null

    let pessoa = pessoaController.buscaPorId(id)
    //console.log(pessoa)

    if(pessoa) {
        let { _nome, _idade, _peso, _altura } = pessoa
        // preencher o formulario com os dados
        pessoaController.preencheFormulario(_nome, _idade, _peso, _altura)
    }

})

////// formulario formApagar

// CONTROLES DA JANELA MODAL //
function openModal(mensagem) {
    document.querySelector('#modal').classList.add('active')
    document.querySelector('#mensagemModal').innerHTML =
    `
        <h2>${mensagem}</h2>
    `
}

function closeModal() {
    document.querySelector('#modal').classList.remove('active')
}

// EVENTO para fechar janela modal
document.querySelector('#modalClose').addEventListener('click', closeModal)

// botao nao
document.querySelector('#nao').addEventListener('click', closeModal)
// CONTROLES DA JANELA MODAL //
