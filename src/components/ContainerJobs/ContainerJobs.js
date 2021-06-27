import React from "react";
import styled from "styled-components";
import { MainCards } from '../MainCards/MainCards';

const Container = styled.div`
  background-color: #f6f2fc;
`;

const Titulo = styled.div`
  background-color: #7869BF;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;





export default class ContainerJobs extends React.Component {


    

  render() {
    return (
      <Container>
         <Titulo>
            <h2>Jobs mais procurados</h2>
        </Titulo>
        
        <div>
            <MainCards addToCart={this.props.addToCart}/>
        </div>
      </Container>
    );
  }
}
