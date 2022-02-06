import { View } from './View.js'
import { ModalHelper } from '../helpers/ModalHelper.js'

export class ModalView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return model.titulo ? ModalHelper.modal(model.titulo, model.texto) : ''
    }

}
