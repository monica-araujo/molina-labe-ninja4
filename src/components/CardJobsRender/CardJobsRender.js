import React from "react";
import styled from "styled-components";
import ShoppingCart from '../../images/shopping-cart.png';
import { convertDate } from '../../utils/convertDate';


const CardContainer = styled.div` 
  display: grid;
  grid-template-columns: 80% 1fr;
  height: 160px;
  background-color: white;
  border-top: 1px solid #484848;
  padding: 20px;



    p, i{
      color: #484848;
    }

    h3{
      display: inline-block;
    }


    button{
      border:none;
      cursor: pointer;
      border-radius: 15px;
      transition: 1s;
      background-color: white;
      &:hover{
        background-color: #484848;
        p{
          color: #ffffff;
        }
      }
    }
    `

const TitleJob = styled.h3` 
color: #7869BF;
` 

const ShoppingCartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: flex-end;
padding-top: 5px;
`

const ItalicText = styled.i`
display: block;
`

const CardJobsRender = (props) => {
  return (
    <CardContainer>
        <div>
        <TitleJob>{props.job.title} </TitleJob> <i> - Data de vencimento: {convertDate(props.job.dueDate)}</i>
            <ItalicText>{props.job.description}</ItalicText>
            <p>Método de pagamento: </p>
            <p>{props.job.paymentMethods}</p>
        </div>
        <ShoppingCartContainer>
            <button onClick={() => props.addToCart(props.job)}>
              <img src={ShoppingCart} alt={props.job.title} /> 
              <p>Colocar no carrinho</p>
            </button>
            <h3>Preço: R$ {props.job.price},00</h3>               
        </ShoppingCartContainer>
    </ CardContainer>
  )
}
export default CardJobsRender