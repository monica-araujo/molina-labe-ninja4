import React from 'react';
import styled from 'styled-components';
import CardJobsRender from '../CardJobsRender/CardJobsRender'
import axios from 'axios'

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 25% 70%;
  padding: 20px 0 20px 30px;
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 0.4em #484848;
  width: 80%;
 `

  

const InputContiner = styled.input` 
  margin: 10px;
  `


//estilizacao do campo busca

const ImputContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
` 

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
  background-color: #7869BF;
  color: white;
  margin-right: 30px;
  margin-top: 20px;
  align-items: center;
  cursor: pointer;
  border: none;
  transition: 0.5s;
  &:hover {
    background-color: #b7b4ba;
    color: #7869BF;
    font-weight: bold;
  }
`;


export class MainCards extends React.Component {
  state = {
    jobsList: [],
    filteredJobsList: [],
    minVal: "",
    maxVal: "",
    search: "",
    order: ""
  }

  componentDidMount() {
    this.getJobs()
}

componentDidUpdate(prevProps, prevState){
  if(
    this.state.minVal !== prevState.minVal ||
    this.state.maxVal !== prevState.maxVal ||
    this.state.search !== prevState.search ||
    this.state.order !== prevState.order
  ) {
    this.filterJobs()
  }
}
  

  handleMinVal = (e) => {
    this.setState({minVal: e.target.value})
    this.filterJobs()
  }

  handleMaxVal = (e) => {
    this.setState({maxVal: e.target.value})
    this.filterJobs()
  } 

  handleSearch = (e) => {
    this.setState({search: e.target.value})
    this.filterJobs()
  } 

  handleOrder = (e) => {
    this.setState({order: e.target.value})
    this.filterJobs()
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
        this.setState({jobsList: res.data.jobs, filteredJobsList: res.data.jobs})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  filterJobs = () => {
    const maximum = this.state.maxVal ? Number(this.state.maxVal) : Infinity
    const minimum = this.state.minVal ? Number(this.state.minVal) : -Infinity

    const newJobsList = this.state.jobsList
      .filter((jobs) => jobs.price >= minimum)
      .filter((jobs) => jobs.price <= maximum)
      .filter((jobs) => {
        const jobTitle = jobs.title.toLowerCase()
        const jobDescription = jobs.description.toLowerCase()
        const searchText = this.state.search.toLocaleLowerCase()
        return jobTitle.includes(searchText) || jobDescription.includes(searchText)
      }).sort((a,b) => {
        switch(this.state.order){
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor": 
            return b.price - a.price;
          case "Título":
            return a.title.localeCompare(b.title)
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate)
          default: 
          return console.log("erro para renderizar")
        }
      }) 

      
    this.setState({filteredJobsList: newJobsList})
  }

  

  render() {

    const jobComponents = this.state.filteredJobsList.map((job) => {
      return <CardJobsRender key={job.id} job={job}  addToCart={this.props.addToCart}/>
  })
    

    return (
      <>
        <ImputContainer>
          <InputStyle value={this.state.search} onChange={this.handleSearch} placeholder="Pesquise um trabalho"></InputStyle>
          <BotaoBuscar>Buscar</BotaoBuscar>
        </ImputContainer>
        <ContainerMain>
          <FilterContainer>
            <h2>Filtros: </h2>
            <InputContiner value={this.state.minVal} onChange={this.handleMinVal}  placeholder="Valor minimo"></InputContiner>
            <InputContiner value={this.state.maxVal} onChange={this.handleMaxVal}  placeholder="Valor máximo"></InputContiner>
            <div>
              <select value={this.state.order} onChange={this.handleOrder}>
                <option >Escolha uma ordenação:</option>
                <option >Menor Valor</option>
                <option >Maior Valor</option>
                <option >Título</option>
                <option >Prazo</option>
              </select> 
            </div>
         
          </FilterContainer>
          <div>
            {jobComponents}
          </div>
        </ ContainerMain>
      </>
    )
  }
}
