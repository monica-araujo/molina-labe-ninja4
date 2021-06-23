import React from 'react'
import styled from 'styled-components'
import backend from '../img/back-end-developer.png'
import game from '../img/Develop-a-Game-Step-18.png'
import flutter from '../img/flutter_dev-scaled.png'
import frontend from '../img/Front-end.png'
import fullstack from '../img/fullstack.png' 
import uiux from '../img/UIUX-1.png'


const Image = styled.img ` 
    height: 130px;
    object-fit: cover;
    border: 1px solid;
    border-radius: 10%;
    border: none;
`
const ConteinerCard = styled.div ` 
    display: block;
    outline: none;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    columns: 3;
    padding: 5px;
    width: 850px;

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
    background-color: #fff;
    background-color: #DDA0DD;
`

const TextoPrincipal = styled.h2 ` 

    text-align: center;
    font-family: 'Roboto Mono';
    color: ;
`

const Orçamento = styled.h4 ` 
    color: #4B0082;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    :hover {
        color:#7B68EE;
    }
`
const NomeDoServiço = styled.p ` 

    font-family: 'Roboto Mono';
    font-size: 18px;
    text-align: center;
`


export default class Servicos extends React.Component {

    render() {

        return (
            <div> 
                <div>

                    <TextoPrincipal>Principais serviços pedidos</TextoPrincipal>

                    <NomeDoServiço>Os serviços mais realizados de cada categoria</NomeDoServiço>
                        

                </div>
            
                <ConteinerCard>

                    <Card>
                        <Image src={frontend} />
                        <NomeDoServiço>Front-end Developer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>


                    <Card>
                        <Image src={backend} />
                        <NomeDoServiço>Back-end Developer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>


                    <Card> 
                        <Image src={fullstack} />   
                        <NomeDoServiço>Full Stack Developer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>

                    <Card> 
                        <Image src={uiux} />
                        <NomeDoServiço>UX/UI Designer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>

                    <Card> 
                        <Image src={game} />
                        <NomeDoServiço>Game Developer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>

                    <Card> 
                        <Image src={flutter} />
                        <NomeDoServiço>Flutter Developer</NomeDoServiço>
                        <Orçamento>Solicitar orçamento</Orçamento>

                    </Card>

                </ConteinerCard>

            </div>
        )
    }
}