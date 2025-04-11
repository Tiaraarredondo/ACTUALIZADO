import React, { Component } from 'react'

class Descripcion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Pepe',
            valorInicialDescripcion: data.overView,
        }
    }

    componentDidMount(){
        this.traerDescripcion()
    }

    traerDescripcion(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((resp) => resp.json())
        .then((data) => console.log('data pelis:', data))
        .catch((e)=> console.log(e))
    }

    Vacio(valor){
        this.setState({
            valorInicialDescripcion: this.state.valorInicialDescripcion + valor
        })
    }

    Completo(){
        this.setState({
            valorInicialDescripcion: this.state.valorInicialDescripcion - 1
        })
    }

    render(){
       return(
        <>
           
            <h3>Descripcion : {this.state.valorInicialDescripcion}</h3>
            <button onClick={() => this.Completo(this.props.valorDescripcion) } >
                Descripcion
            </button>
            
        </>
       ) 
    }
}

export default Descripcion