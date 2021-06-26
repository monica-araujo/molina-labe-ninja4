import React from "react";
import styled from "styled-components";
import { MainCards } from '../MainCards/MainCards';
import axios from 'axios';

const Container = styled.div`
  background-color: #f6f2fc;
`;

const Titulo = styled.div`
  background-color: #b000c5;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const InputStyle = styled.input`
  margin-top: 20px;
  margin-left: 10px;
  width: 60%;
  height: 20px;
`;

const BotaoBuscar = styled.button`
  border-radius: 10px;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  background-color: #cb00d2;
  color: white;
  margin-right: 30px;
  align-items: center;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #b7b4ba;
    color: #cb00d2;
    font-weight: bold;
  }
`;



export default class ContainerJobs extends React.Component {


    state = {
        jobsList: []
    }

    componentDidMount() {
        this.getJobs()
    }

    getJobs = () => {
        const url = "https://labeninjas.herokuapp.com/jobs";
        const headers = {
          headers: {
            Authorization: "f7402425-2752-4496-810f-b228d56e2527"
          }
        }
        axios
          .get(url, headers)
          .then((res) => {
            this.setState({jobsList: res.data.jobs})
            console.log(this.state.jobsList)
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }

  render() {
    return (
      <Container>
         <Titulo>
            <h2>Jobs mais procurados</h2>
        </Titulo>
        <div>
            <InputStyle placeholder="Pesquise um trabalho"></InputStyle>
            <BotaoBuscar>Buscar</BotaoBuscar>
        </div>
        <div>
            <MainCards 
                jobsList={this.state.jobsList}
            />
        </div>
      </Container>
    );
  }
}
