import React from 'react';
import { Footer } from '../components/Footer'
import Header from '../components/header'
import { Form } from '../components/Form'

export default class Conteiner extends React.Component {
    render() {
        return(
            <div>
                <Header trocarParaTelaConteiner={this.props.trocarParaTelaConteiner}  trocarParaTelaDeLista={this.props.trocarParaTelaDeLista} trocarParaTelaCadastro={this.props.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.props.trocarParaTelaCarrinho} />
                <Form />
                <Footer/>
            </div>
        )
    }
}