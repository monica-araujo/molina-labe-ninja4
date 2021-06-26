import React from 'react';
import Servicos from '../components/Servicos'
import { Footer } from '../components/Footer'
import Header from '../components/header'

export default class Conteiner extends React.Component {

    
    render() {
        return(
                <div>
                <Header trocarParaTelaDeLista={this.props.trocarParaTelaDeLista} trocarParaTelaCadastro={this.props.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.props.trocarParaTelaCarrinho}/>
                <Servicos trocarParaTelaDeLista={this.props.trocarParaTelaDeLista}/>
                <Footer />
            </div>
        )
    }
}