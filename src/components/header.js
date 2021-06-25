import React from "react";
import styled from "styled-components";
import Logo from "../img2/logo.png";
import Conteiner from './AppConteiner'
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
  height: 50px;
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
    color: #cb00d2;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #cb00d2;
  color: white;
  height: 40px;
  margin-right: 70px;
  align-items: center;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #b7b4ba;
    color: #cb00d2;
    font-weight: bold;
  }
`;

export default class header extends React.Component {
  render() {
    return (
      <div className="Header">
        <StyleHeader>
         <a href={Conteiner} ><ImagemLogo src={Logo} /></a> 
          <Menu>
            <Li>Como Funciona</Li>
            <Li>Entrar</Li>
            <Li>
              <Button onClick={this.props.trocarParaTelaCadastro}  >Seja Um Profissional</Button>
            </Li>
          </Menu>
        </StyleHeader>
      </div>
    );
  }
}
