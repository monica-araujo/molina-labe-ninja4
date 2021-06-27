import React from "react";
import styled from "styled-components";
import Logo from "../img2/logo.png";
import LogoCarrinho from "../images/shopping-cart-menor.png"

  const ImagemLogo = styled.img`
    width: 125px;
    padding-left: 7px;
    cursor: pointer;
  `;

  const StyleHeader = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    padding-left: 7%;
    align-items: center;
    display: flex;
    background-color: #f6f2fc;
    height: 70px;
    justify-content: space-between;
  `;

  const Menu = styled.menu`
    display: flex;
    list-style: none;
    font-size: 14px;
    align-items: center;
  `;

  const Li = styled.li`
    margin-left: 25px;
    cursor: pointer;
    &:hover {
      color: #7869BF;
      font-weight: bold;
    }
  `;

  const Button = styled.button`
    border-radius: 10px;
    background-color: #7869BF;
    color: white;
    height: 40px;
    margin-right: 70px;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: 0.5s;
    &:hover {
      background-color: #b7b4ba;
      color: #7869BF;
      font-weight: bold;
    }
  `
  
  const ButtonTransparente = styled.button ` 
  border: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: transparent;
  cursor:pointer;
  &:hover {
      color: #7869BF;
      font-weight: bold;
    }
  `
  const Carrinho = styled.img`
    position: relative;
  `

  const NumeroCarrinho = styled.p`
    position: relative;
    display: inline;
    background-color: #464646;
    padding: 4px;
    color:white;
    border-radius: 40px;
  `

export default class header extends React.Component {
  render() {
    return (
      <div className="Header">
        <StyleHeader>
        <ButtonTransparente onClick={this.props.trocarParaTelaConteiner} ><ImagemLogo src={Logo} /></ButtonTransparente>
          <Menu>
            <Li>
              <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Serviços</ButtonTransparente>
            </Li>

            <Li>
              <ButtonTransparente onClick={this.props.trocarParaTelaCarrinho}>
                <Carrinho src={LogoCarrinho} alt="carrinho" />
                <NumeroCarrinho>{this.props.cart ? this.props.cart.length : 0}</NumeroCarrinho>
              </ButtonTransparente>
              
            </Li>

            <Li>
              <Button onClick={this.props.trocarParaTelaCadastro}  >Seja Um Profissional</Button>
            </Li>
          </Menu>
        </StyleHeader>
      </div>
    );
  }
}
