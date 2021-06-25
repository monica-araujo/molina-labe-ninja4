import React from 'react'
import Servicos from './components/Servicos'
import { AppContainer } from './components/AppContainer'
import { Footer } from './components/Footer/Footer'

export default class App extends React.Component {
	render() {

		return (
			<div>
				
				<AppContainer />

				<Servicos />

				<Footer />

			</div>
		)	
	}

}