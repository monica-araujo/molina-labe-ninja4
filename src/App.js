import React from 'react'
import Conteiner from './components/AppConteiner'
import Cadastro from './components/Cadastro'

export default class App extends React.Component {

	state = {
		telaAtual: "conteiner"
	}

	escolherTela = () => {
		switch (this.state.telaAtual) {

			case "conteiner":
				return <Conteiner trocarParaTelaCadastro={this.trocarParaTelaCadastro} />
			case "cadastro":
				return <Cadastro trocarParaTelaConteiner={this.trocarParaTelaConteiner} />
			default:
				return <div>ERRO</div>
		}
	}

	trocarParaTelaConteiner = () => {
		this.setState({ telaAtual: 'conteiner' })
	}
	trocarParaTelaCadastro = () => {
		this.setState({ telaAtual: 'cadastro' })
		console.log("trocarParaTelaCadastro")
	}

	render() {

		return (
			<div>
				{this.escolherTela()}
			</div>
		)
	}
}
