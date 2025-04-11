import React, { Component } from 'react'

export default class Cartelera extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPelicula: props.data,
            favorito: false
        }
    }

    agregarAlFav(id){
      let storage = localStorage.getItem('Fav')
      if(storage !== null){
        let arrParseado = JSON.parse(storage)
        arrParseado.push(id)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('Fav', arrStringificado)
      } else {
        let primerID = [id]
        let arrStringificado = JSON.stringify(primerID)
        localStorage.setItem('Fav', arrStringificado)
      }

      this.setState({
        favorito: true
      })
    }

    sacarDelFav(id){
      const storage = localStorage.getItem('Fav')
      const storageParseado = JSON.parse(storage)
      const filtrarStorage = storageParseado.filter((elm) => elm !== id )
      const storageStringificado = JSON.stringify(filtrarStorage)
      localStorage.setItem('Fav', storageStringificado)

      this.setState({
        favorito: false
      })
    }

  render() {
    return (
      <div>
        <h1>{this.state.dataPelicula.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${this.state.dataPelicula.poster_path}`} alt={this.state.dataPelicula.title} />
        {
          this.state.favorito ?
          <button onClick={()=> this.sacarDelFav(this.state.dataPelicula.id) }>Sacar del Fav</button>
          :
          <button onClick={() => this.agregarAlFav(this.state.dataPelicula.id)}>Agregar al Fav</button>
        }
      </div>
    )
  }
}