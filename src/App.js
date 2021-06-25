import React from 'react'
import { Form } from './components/Form/Form'
import Servicos from './components/Servicos'
import { Footer } from './components/Footer/Footer'
import Header from './components/header'

export default class App extends React.Component {
	render() {
      return (
      <div>
        <Header />
        <Form />
        <Servicos />
        <Footer />
      </div>
    )
  }
}
