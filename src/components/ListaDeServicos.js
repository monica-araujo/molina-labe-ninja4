import React from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/header'

export default class ListaDeServicos extends React.Component {
    render() {
        return(
            <div>
                <Header trocarParaTelaConteiner={this.props.trocarParaTelaConteiner}  trocarParaTelaDeLista={this.props.trocarParaTelaDeLista} trocarParaTelaCadastro={this.props.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.props.trocarParaTelaCarrinho}/>
                <Footer/>
            </div>
        )
    }
}