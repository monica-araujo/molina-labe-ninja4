import React from 'react'
import Servicos from './components/Servicos'
import { AppContainer } from './components/AppContainer'
import { Footer } from './components/Footer/Footer'
import Header from './components/header'

export default class App extends React.Component {
	render() {

		return (

			<div>

				<Header />
				<AppContainer />

				<Servicos />
				<Footer />

			</div>

		)
	}
}