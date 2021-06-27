import React from 'react'
import Conteiner from './components/pages/Conteiner'
import Cadastro from './components/pages/Cadastro'
import Carrinho from './components/pages/Carrinho'
import ListaDeServicos from './components/pages/ListaDeServicos'
import Header from './components/header'


export default class App extends React.Component {

	state = {
		telaAtual: "conteiner",
		valorTotal: 0,
        cart: []
	}



	addToCart = (job) => {
		const newCart = [...this.state.cart, job]
		this.setState({cart: newCart})
		alert(`O serviço ${job.title} foi adicionado ao carrinho`)
	  }

	removeFromCart = (id) => {
	const canDelete = window.confirm("Tem certeza que deseja remover este produto?")
	if (canDelete){
		const newCart = this.state.cart.filter((cartItem) => {
		return cartItem.id !== id
		})
		this.setState({cart: newCart})
	}
	}

	clearCart = () => {
		this.setState({cart: []})
		alert("Obrigado por comprar conosco!")
	}

	escolherTela = () => {
		switch (this.state.telaAtual) {

			case "conteiner":
				return <Conteiner trocarParaTelaDeLista={this.trocarParaTelaDeLista} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.trocarParaTelaCarrinho} />
			case "cadastro":
				return <Cadastro  trocarParaTelaConteiner={this.trocarParaTelaConteiner} />
			case 'carrinho':
				return <Carrinho cart={this.state.cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart}  trocarParaTelaDeLista={this.trocarParaTelaDeLista} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaConteiner={this.trocarParaTelaConteiner} />
			case 'servicos':
				return <ListaDeServicos  addToCart={this.addToCart} trocarParaTelaConteiner={this.trocarParaTelaConteiner} trocarParaTelaCadastro={this.trocarParaTelaCadastro} trocarParaTelaCarrinho={this.trocarParaTelaCarrinho}/>
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

	trocarParaTelaListaDeServicos = () => {
		this.setState({ telaAtual: 'listaDeServicos'})
	}

	render() {

		return (
			<div>
				<Header 
                    trocarParaTelaConteiner={this.trocarParaTelaConteiner}  
                    trocarParaTelaDeLista={this.trocarParaTelaDeLista} 
                    trocarParaTelaCadastro={this.trocarParaTelaCadastro} 
                    trocarParaTelaCarrinho={this.trocarParaTelaCarrinho}
					cart={this.state.cart}
                />
				{this.escolherTela()}
			</div>
		)
	}
}
