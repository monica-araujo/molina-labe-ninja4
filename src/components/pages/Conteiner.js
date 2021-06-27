import React from 'react';
import Servicos from '../Servicos'
import { Footer } from '../Footer'

export default class Conteiner extends React.Component {

    
    render() {
        return(
            <div>
                <Servicos trocarParaTelaDeLista={this.props.trocarParaTelaDeLista}/>
                <Footer />
            </div>
        )
    }
}