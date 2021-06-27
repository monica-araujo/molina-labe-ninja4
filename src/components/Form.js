import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div` 
    background-color: #f6f2fc;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    h1, p{
        color:#7869BF;
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
    font-family: 'Roboto Mono';
    

`

const TextArea = styled.textarea`
    width: 550px;
    border-radius: 5px;
    height: 50px;
    border: none;
    font-family: 'Roboto Mono';
`
const InputContainer = styled.input` 
    width: 250px;
    border-radius: 5px;
    border: none;
    height:30px;
    font-family: 'Roboto Mono';
` 
const SelectContainer = styled.select`
    width: 260px;
    border-radius: 5px;
    border: none;
    height:30px;
    color:#7869BF;
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
        titulo: "",
        descricao: "",
        preco:"",
        pagamento: [],
        data:""
    }

    componentDidMount () {
        // this.adicionarUmNinja()
    }

    

    adicionarUmNinja = async () => {
            const body = {
              title: this.state.titulo,
              description: this.state.descricao,
              price: Number(this.state.preco),
              paymentMethods: [this.state.pagamento],
              dueDate: this.state.data
        
            }
            try {
                const url = "https://labeninjas.herokuapp.com/jobs"
              await axios.post(url, body, {
                headers: {
                    Authorization: "f7402425-2752-4496-810f-b228d56e2527"
                }
              }) 
              alert('Cadastro realizado com sucesso!')
              
              this.setState({
                titulo: '',
                preco: '',
                descricao: '',
                pagamento: [],
                data: ''
              })
        
            } catch (err) {
            console.log(err.response.data)
        }
    }

  render() {
    return (

        <FormContainer>

            <h1> Cadastre o seu serviço </h1>


            <FormBox>
                <FormFlex >

                    <LabelContainer >
                        <p>Job: </p>            
                        <InputContainer 
                            value={this.state.titulo}
                            onChange={e => this.setState({ titulo: e.target.value })}
                        />
                    </LabelContainer>

                    <LabelContainer >
                        <p>Preço: </p> 
                        <InputContainer  
                            value= {this.state.preco}
                            onChange={e => this.setState({ preco: e.target.value })}
                        />
                    </LabelContainer>

                </FormFlex>


                <FormFlex >

                    <LabelContainer >
                        <p>Método de pagamento:</p>
                        <SelectContainer onChange={e => this.setState({ pagamento: e.target.value })}>
                            <option></option>
                            <option value="Boleto">Boleto</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Pix">Pix</option>

                        </SelectContainer>
                    </LabelContainer>

                    <LabelContainer >
                        <p>Data de vencimento:</p>
                        <InputContainer 
                            type="date" 
                            value={this.state.data}
                            onChange={e => this.setState({ data: e.target.value })}
                        />
                    </LabelContainer>

                </FormFlex>

                <form >

                    <label >
                        <p>Descrição:</p>
                        <TextArea 
                        value={this.state.descricao}
                        onChange={e => this.setState({ descricao: e.target.value })}
                        />
                    </label>

                </form>

            </FormBox>


            <ButtonStylized onClick={this.adicionarUmNinja}>
                Cadastrar
            </ButtonStylized>


        </FormContainer>

    )
  }
}
