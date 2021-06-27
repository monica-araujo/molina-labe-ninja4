import React from 'react';
import styled from 'styled-components'



 const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #4f4f50;
    margin: 20px;
 `

const ButtonTransparente = styled.button ` 
    border: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #7869BF;
    cursor:pointer;
    &:hover {
        background-color: #4f4f50;
        color: #7869BF;
        font-weight: bold;
    }
`

const CartCard = (props) => {
    return (
        <div>
            <CartContainer>
                <h3>{props.title}</h3>
                <p>R${props.price},00</p>
                <ButtonTransparente onClick={() => props.removeFromCart(props.id)}>Remover</ButtonTransparente>
            </CartContainer>
        </div>
    )
}

export default CartCard