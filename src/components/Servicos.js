/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import backend from '../img/back-end-developer.png';
import game from '../img/Develop-a-Game-Step-18.png';
import flutter from '../img/flutter_dev-scaled.png';
import frontend from '../img/Front-end.png';
import fullstack from '../img/fullstack.png';
import uiux from '../img/UIUX-1.png';
import Carousel  from 'react-elastic-carousel';
import Banner from './Banner';


const Image = styled.img ` 
    height: 180px;
    width: 250px;
    object-fit: cover!important ;
    border: 1px solid;
    border-radius: 10%;
    border: none;
`
const ConteinerCard = styled.div ` 
    display: flex;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    padding: 15px;
    align-items: center;
    width: 538px;

`
const Conteiner = styled.div ` 
    background-color: #f5f4fc;
`

const Card = styled.div `
    display: flex;
    margin-bottom: 7px;
    flex-direction: column ;
    align-items: center;
    -webkit-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    -moz-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    border: 1px solid #767676;
    padding: 0.7rem 0.9rem;
    border-radius: 10px;
    border: none;
    width: 380px ;
    padding:12px;
    background-color: #bdbcc4;
`

const TextoPrincipal = styled.h1 ` 

    text-align: center;
    font-family: 'Roboto Mono';
    color: #494949 ;
`

const NomeDoServiço = styled.p ` 

    font-family: 'Roboto Mono';
    font-size: 15px;
    color:#5f2b8c;
    text-align: center;
`

const ButtonTransparente = styled.button ` 
    border: none;
    color: #4B0082;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: transparent;
    cursor:pointer;
    &:hover {
        color: #cb00d2;
        font-weight: bold;
    }
`

export default class Servicos extends React.Component {
    
      render() {

        return (
            <>
                <Banner />
                <Conteiner> 
                    <div>

                        <TextoPrincipal>Principais serviços pedidos</TextoPrincipal>

                        <NomeDoServiço>Os serviços mais realizados de cada categoria</NomeDoServiço>
                            

                    </div>

                    

                    <ConteinerCard>

                        <Carousel > 
                            <Card>
                                <Image src={frontend} />
                                <NomeDoServiço>Front-end Developer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>


                            <Card>
                                <Image src={backend} />
                                <NomeDoServiço>Back-end Developer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>


                            <Card> 
                                <Image src={fullstack} />   
                                <NomeDoServiço>Full Stack Developer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>

                            <Card> 
                                <Image src={uiux} />
                                <NomeDoServiço>UX/UI Designer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>

                            <Card> 
                                <Image src={game} />
                                <NomeDoServiço>Game Developer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>

                            <Card> 
                                <Image src={flutter} />
                                <NomeDoServiço>Flutter Developer</NomeDoServiço>
                                <ButtonTransparente onClick={this.props.trocarParaTelaDeLista} >Contratar serviço</ButtonTransparente>

                            </Card>
                        </Carousel>
                    </ConteinerCard>

                
                </Conteiner>
            </>
            
            
        )
    }
}