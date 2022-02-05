export class ModalHelper {

    // CONTROLES DA JANELA MODAL //
    static openModal(titulo, mensagem) {
        document.querySelector('#modal').classList.add('active')
        document.querySelector('#titulo').innerHTML = `${titulo}`
        document.querySelector('#mensagemModal').innerHTML =
        `<h2>${mensagem}</h2>`
    }

    static closeModal() {
        document.querySelector('#modal').classList.remove('active')
    }

    static fecharJanela() {
        // EVENTO para fechar janela modal
        document.querySelector('#modalClose').addEventListener('click', this.closeModal)

        // botao nao
        document.querySelector('#nao').addEventListener('click', this.closeModal)
        // CONTROLES DA JANELA MODAL //
    }

}
