import React, { Component } from 'react';
import styled from 'styled-components';
import ShoppingCart from '../../images/shopping-cart.png';


const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;
  padding: 20px 0 20px 30px;
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 3px 3px 0.4em #484848, -0.3em 0 0.4em #484848;
  width: 80%;
 `

const CardContainer = styled.div` 
    display: grid;
    grid-template-columns: 80% 1fr;
    height: 160px;
    background-color: white;
    box-shadow: 3px 3px 0.4em #484848, -0.3em 0 0.4em #484848;
    margin: 20px;
    padding: 20px;



    h3, p, i{
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

    const ShoppingCartContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: flex-end;
      padding-top: 5px;
    `

    const DivSelect = styled.select` 
      margin-top: 15px;
      background-color: #8b29c5;
      color: white;
    ` 
    const ItalicText = styled.i`
      display: block;
    `


export class MainCards extends Component {

  render() {

    const CardJobsRender = this.props.jobsList.map((jobs) => {
      return (
        <CardContainer>
            <div>
            <h3>{jobs.title} </h3> <i> - Data de vencimento: {jobs.dueDate}</i>
                <ItalicText>{jobs.description}</ItalicText>
                <h3>Preço: {jobs.price},00</h3>
            </div>
            <ShoppingCartContainer>
                <button>
                <img src={ShoppingCart} alt="Carrinho" /> 
                <p>Colocar no carrinho</p>
                </button>
                <DivSelect name="select">
                    <option value="">Método de pagamento</option>
                    <option value="">Boleto</option>
                    <option value="">PayPal</option>
                </DivSelect>
            </ShoppingCartContainer>
        </CardContainer>    
      )
    })

    return (
        <ContainerMain>
          <FilterContainer>
            <h2>Filtros: </h2>
          </FilterContainer>
          <div>
            {CardJobsRender}
          </div>
        </ ContainerMain>
    )
  }
}
