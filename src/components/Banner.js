import React from "react";
import Styled from "styled-components";
import Ninja from "../assets/NinjaProgramador.png"
import Servicos from "./Servicos";




const TitleSection = Styled.div`
display:flex;
flex-direction:row-reverse;
font-size:18px;
margin-left:2%;
position:relative;

`;

const ContainerBanner = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const P = Styled.p`
color:#8b26c5;
font-style:strong;

`;

const H2 = Styled.h2`
font-style:strong;


`;

const ButtonStyle = Styled.button`
display:flex;
justify-content:center;
margin-top:50px;
margin-bottom: 20px;
border-radius: 10px;
  background-color: #8b26c5;
  color: white;
  height: 50px;
  align-items: center;
  cursor: pointer;
  border: none;
  width:40%;
  
  &:hover{
      background: grey;
      
  }


`;

const DivBotao = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`


export default class Banner extends React.Component {
    render () {
        return (
            <div className="Texto">
    
                <TitleSection>  
                <img src={Ninja} width="40%" />
                    <ContainerBanner>
                        <P>   
                        <H2>
                            <h2>
                                Contrate os melhores <span>freelancers para </span>
                                <span>qualquer trabalho, </span> 
                                tudo isso online.
                            </h2>
                        </H2>
                            <p>
                                Milhões de pessoas usam o LabeNinjas.com para transformar suas
                                ideias em realidade.
                            </p>
                        <DivBotao >
                            <ButtonStyle onClick={this.props.trocarParaTelaDeLista}>   
                                Contratar um FreeLancer
                            </ButtonStyle>
                            <ButtonStyle onClick={this.props.trocarParaTelaCadastro}>
                                Ganhar Dinheiro Trabalhando como Freelancer
                            </ButtonStyle> 
                        </DivBotao>
                        
                        
                        </P>
                    </ContainerBanner>
                    
         
                </TitleSection>    
    
            </div>

        )
    }
    

}
