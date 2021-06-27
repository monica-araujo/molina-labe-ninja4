import React from 'react'
import { Footer } from '../Footer'
import ContainerJobs from '../ContainerJobs/ContainerJobs'

export default class ListaDeServicos extends React.Component {
    render() {
        return(
            <div>     
                <ContainerJobs addToCart={this.props.addToCart}/>
                <Footer/>
            </div>
        )
    }
}