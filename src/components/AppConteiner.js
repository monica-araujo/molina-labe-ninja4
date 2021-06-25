import React from 'react';
import Servicos from '../components/Servicos'
import { Footer } from '../components/Footer'
import Header from '../components/header'

export default class Conteiner extends React.Component {

    
    render() {
        return(
                <div>
                <Header    trocarParaTelaCadastro={this.props.trocarParaTelaCadastro} />
                <Servicos />
                <Footer />
            </div>
        )
    }
}