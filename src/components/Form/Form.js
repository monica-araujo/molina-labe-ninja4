import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div` 
    background-color: #b000c5;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1, p{
        color: white;
    }
`

const FormBox = styled.div` 
    display: flex;
    flex-direction: column;
`

 const FormFlex = styled.form` 
    display: flex;
    justify-content: space-between;
 `

const LabelContainer = styled.label`
    margin-right: 40px;
`

const TextArea = styled.textarea`
    width: 550px;
    height: 50px;
`
const InputContainer = styled.input` 
    width: 250px;
` 
const SelectContainer = styled.select`
    width: 260px;
`


const ButtonStylized = styled.button`
    background-color: #000003;
    color: white;
    padding: 7px;
    margin: 7px;
    border: none;
    cursor: pointer;
    display: block;
    margin-right: 40%;
    &:hover{
        background-color: white;
        color: #000003;
    }
 `


export class Form extends Component {
    state = {
        job: "",
        preco: "",
        metododePagamento: [],
        dataDeVencimento:"",
        descricao: ""
    }

   /*  componentDidMount(){
        this.postJobs()
    } */

    OnChangeJob = (e) => {
        this.setState({job: e.target.value})
    }

    OnChangePreco = (e) => {
        this.setState({preco: e.target.value})
    }


    OnChangeDataDeVencimento = (e) => {
        this.setState({dataDeVencimento: e.target.value})
    }

    OnChangeDescricao = (e) => {
        this.setState({descricao: e.target.value})
    }

    postJobs = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const body = {
            title: this.state.job,
            description: this.state.descricao,
            price: this.state.preco,
            paymentMethods: this.state.metododePagamento,
            dueDate: this.state.dataDeVencimento, 
        }
        
        axios
        .post(url, body, {
            headers: {
                Authorization: "f7402425-2752-4496-810f-b228d56e2527"
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

  render() {
    return (

        <FormContainer>
            <h1>Conte nos o que precisa realizar</h1>
            <FormBox>
                <FormFlex >
                    <LabelContainer >
                        <p>Job: </p>            
                        <InputContainer 
                            type="text" 
                            value={this.state.job}
                            onChange={this.OnChangeJob}
                        />
                    </LabelContainer>
                    <LabelContainer >
                        <p>Preço: </p> 
                        <InputContainer 
                            type="number" 
                            value= {this.state.preco}
                            onChange={this.OnChangePreco}
                        />
                    </LabelContainer>
                </FormFlex>
                <FormFlex >
                    <LabelContainer >
                        <p>Método de pagamento:</p>
                        <SelectContainer >
                            <option></option>
                            <option value="boleto">Boleto</option>
                            <option value="cartao">Cartão de crédito</option>
                            <option value="PayPal">PayPal</option>
                        </SelectContainer>
                    </LabelContainer>
                    <LabelContainer >
                        <p>Data de vencimento:</p>
                        <InputContainer 
                            type="date" 
                            value={this.state.dataDeVencimento}
                            onChange={this.OnChangeDataDeVencimento}
                        />
                    </LabelContainer>
                </FormFlex>
                <form >
                    <label >
                        <p>Descrição:</p>
                        <TextArea 
                        type="text" 
                        value={this.state.descricao}
                        onChange={this.OnChangeDescricao}
                        />
                    </label>
                </form>
            </FormBox>
            <ButtonStylized
                onClick={this.postJobs}
            >
                Submit
            </ButtonStylized>
        </FormContainer>

    )
  }
}
