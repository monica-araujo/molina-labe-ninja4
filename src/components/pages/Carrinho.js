import React from "react";
import styled from 'styled-components'
import { Footer } from '../Footer'
import CartCard from '../CartCard/CartCard'



const DivTitle = styled.div`
    margin: 80px;
    color: #4f4f50;
    border-bottom: 1px solid #4f4f50;
 `

const DivCart = styled.div`
    color: #4f4f50;
    display: grid;
    grid-template-columns: 100px 1fr 1fr 1fr 100px;
    gap: 25px;
 `

 const CartContainer = styled.div`
    grid-column-start: 2;
 `
 const TotalContainer = styled.div`
    grid-column-start: 3;
 `

const BottonsContainer = styled.div`
grid-column-start: 4;
`


const ButtonTransparente = styled.button ` 
border: none;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
background-color: #7869BF;
cursor:pointer;
margin: 15px;
color: white;
&:hover {
    background-color: #4f4f50;
    color: #7869BF;
    font-weight: bold;
}
`

export default class Carrinho extends React.Component {
    render() {
        const cartComponents = this.props.cart.map((item) => {
            return <CartCard key={item.id} title={item.title} price={item.price} id={item.id} removeFromCart={this.props.removeFromCart}/>
        })

        let totalPrice = 0

        this.props.cart.forEach((item) => {
            totalPrice += item.price
        })

        return(
            <div>
                <DivTitle>
                    <h1>Carrinho de compras</h1>
                </DivTitle>
                <DivCart>
                    <CartContainer>
                        {cartComponents.length > 0 ? (
                            <>
                                {cartComponents} 
                                
                            </>
                            ) : (
                                <h1>Carrinho Vazio</h1>
                            )}
                    </CartContainer>
                    <TotalContainer>
                        <h2>Total: {totalPrice.toFixed(2)}</h2>
                    </TotalContainer>
                    <BottonsContainer>
                        <ButtonTransparente onClick={this.props.clearCart}>Finalizar Compra</ButtonTransparente>
                    </BottonsContainer>
                </DivCart>
                <Footer/>
            </div>
        )
    }
}