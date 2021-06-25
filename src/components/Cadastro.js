import React from 'react';
import { Footer } from '../components/Footer'
import Header from '../components/header'
import { Form } from '../components/Form'

export default class Conteiner extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Form />
                <Footer/>
            </div>
        )
    }
}