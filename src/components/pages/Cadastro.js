import React from 'react';
import { Footer } from '../Footer'
import { Form } from '../Form'

export default class Conteiner extends React.Component {
    render() {
        return(
            <div>
                <Form />
                <Footer/>
            </div>
        )
    }
}