import React from 'react'
import Conteiner from './components/AppConteiner'
import Cadastro from './components/Cadastro'
import Carrinho from './components/Carrinho'
import ListaDeServicos from './components/ListaDeServicos'
export default class App extends React.Component {

	state = {
		telaAtual: "conteiner"
	}

	escolherTela = () => {
		switch (this.state.telaAtual) {

			case "conteiner":
				return <Conteiner trocarParaTelaDeLista={this.trocarParaTelaDeLista} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.trocarParaTelaCarrinho} />
			case "cadastro":
				return <Cadastro trocarParaTelaConteiner={this.trocarParaTelaConteiner} />
			case 'carrinho':
				return <Carrinho trocarParaTelaDeLista={this.trocarParaTelaDeLista} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaConteiner={this.trocarParaTelaConteiner} />
			case 'servicos':
				return <ListaDeServicos trocarParaTelaConteiner={this.trocarParaTelaConteiner} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.trocarParaTelaCarrinho}/>
				default:
				return <div>ERRO</div>
		}
	}

	trocarParaTelaDeLista = () => {
		this.setState({ telaAtual: 'servicos'})
	}


	trocarParaTelaConteiner = () => {
		this.setState({ telaAtual: 'conteiner' })
	}

	trocarParaTelaCadastro = () => {
		this.setState({ telaAtual: 'cadastro' })
	}
	trocarParaTelaCarrinho = () => {
		this.setState({ telaAtual: 'carrinho' })
	}

	render() {

		return (
			<div>
				{this.escolherTela()}
			</div>
		)
	}
}
