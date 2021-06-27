import React from "react";
import Styled from "styled-components";
import Ninja from "../assets/NinjaProgramador.png"
import FrontEnd from "../assets/Front-end-Icon.png"



const TitleSection = Styled.div`
display:flex;
flex-direction:row-reverse;
font-size:26px;
margin-left:2%;
position:relative;

`;



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

const Icons = Styled.div`
display:flex;
justify-content:space-between;
margin-left:7%;
margin-top:30%;

`


export default function Banner() {
    return (
        <div className="Texto">

            <TitleSection>  
            <img src={Ninja} width="80%" />
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
                <ButtonStyle>   
                    Contratar um FreeLancer
                </ButtonStyle>
            <ButtonStyle>
                Ganhar Dinheiro Trabalhando como Freelancer
            
            </ButtonStyle>  
                        
                       
            </p>
                <Icons>
                    <img src={FrontEnd} width="8%" />  
                    <img src={FrontEnd} width="8%" />  
                    <img src={FrontEnd} width="8%" />
                </Icons>
            </P>
     
      </TitleSection>    

        </div>
    );
}
