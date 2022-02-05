import { View } from '../views/View.js'

export class MensagemView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return model.texto ? `<p class='alert alert-success'>${model.texto}</p>` : '<p></p>'
    }
    // sobrescrevemos (overed) o metodo update da classe mae pq temos uma diferenca
    update(model) {
        this._elemento.innerHTML = this.template(model)
        // apos 3 segundos definir conteudo vazio para limpar a mensagem
        setTimeout(() => this._elemento.innerHTML = '', 3000)
    }

}
