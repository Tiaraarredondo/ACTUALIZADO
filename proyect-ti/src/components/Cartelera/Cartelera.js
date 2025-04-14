import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

export default class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPelicula: {},
      favorito: false,
    };
  }
  

  componentDidMount() {
    const id = this.props.data.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dataPelicula: data });

        const storage = localStorage.getItem('Fav');
        if (storage !== null) {
          const arrParseado = JSON.parse(storage);
          if (arrParseado.includes(data.id)) {
            this.setState({ favorito: true });
          }
        }
      })
      .catch((err) => console.log(err));
  }

  agregarAlFav(id) {
    let storage = localStorage.getItem('Fav');
    if (storage !== null) {
      let arrParseado = JSON.parse(storage);
      if (!arrParseado.includes(id)) {
        arrParseado.push(id);
        let arrStringificado = JSON.stringify(arrParseado);
        localStorage.setItem('Fav', arrStringificado);
      }
    } else {
      let primerID = [id];
      let arrStringificado = JSON.stringify(primerID);
      localStorage.setItem('Fav', arrStringificado);
    }

    this.setState({
      favorito: true,
    });
  }

  sacarDelFav(id) {
    const storage = localStorage.getItem('Fav');
    const storageParseado = JSON.parse(storage);
    const filtrarStorage = storageParseado.filter((elm) => elm !== id);
    const storageStringificado = JSON.stringify(filtrarStorage);
    localStorage.setItem('Fav', storageStringificado);

    this.setState({
      favorito: false,
    });
  }

  render() {
    const { dataPelicula, favorito } = this.state;

    return (
      <div className="Cartelera">
        <h1>{dataPelicula.title}</h1>
        {dataPelicula.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${dataPelicula.poster_path}`}
            alt={dataPelicula.title}
          />
        ) : (
          <p>Cargando imagen...</p>
        )}
        {favorito ? (
          <button onClick={() => this.sacarDelFav(dataPelicula.id)}>Sacar del Fav</button>
        ) : (
          <button onClick={() => this.agregarAlFav(dataPelicula.id)}>Fav</button>
        )}
        <Link to={`/DetalleContenido/${dataPelicula.id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    );
  }
}
