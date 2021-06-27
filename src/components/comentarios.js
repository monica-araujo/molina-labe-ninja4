import React from "react";
import styled from "styled-components";

const Principal = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;
`

const CardComentario = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`;

const TextoComentario = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 80px;
    box-shadow: 3px 3px 3px  grey;
    margin-bottom: 100px;

`;

const H3 = styled.h3`
    color: #8b26c5
`

export default function comentarios() {
  return (
    <div className="Comentarios">
        <Principal>
            <h1>Quem contratou um Ninja recomenda</h1>
            <H3>São mais de 3 milhões de clientes e profissionais felizes</H3>
        </Principal>
        <CardComentario>
            <TextoComentario>
            <i>
                "Fui muito bem atendida, o profissional foi muito educado e fez um
                trabalho de qualidade. Valeu a pena, orçamento grátis e não é
                careiro".
            </i>{" "}
            Serviço de FrontEnd, Ana Paula Contratou um FrontEnd em São Paulo, SP
            </TextoComentario>
            <TextoComentario>
            <i>
                "Os profissionais são pessoas dedicadas com seus serviços. Tudo o
                que é pedido é feito da maneira como foi pedido. Aprovado!"
            </i>{" "}
            Serviço de Assistência, Bruno Freitas Contratou uma Assistência em
            Curitiba, PR
            </TextoComentario>
            <TextoComentario>
            <i>
                "Uma excelente profissional, pontual e acima de tudo confiável. Foi
                bastante educada e atenciosa com o trabalho, recomendo".
            </i>{" "}
            Serviço de BackEnd, Renata Figueiredo Contratou uma BackEnd em Rio
            de Janeiro, RJ
            </TextoComentario>
        </CardComentario>
    </div>
  );
}
