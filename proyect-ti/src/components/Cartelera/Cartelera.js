import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const storage = localStorage.getItem('Fav');
    if (storage !== null) {
      const arrParseado = JSON.parse(storage);
      if (arrParseado.includes(data.id)) {
        this.setState({ favorito: true });
      }
    }
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
    const { data } = this.props; // Recibiendo la película como prop
    const { favorito } = this.state;

    return (
      <div className="card">
        <h3>{dataPelicula.title}</h3>
        {dataPelicula.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
            alt={data.title}
          />
        ) : (
          <p>Cargando imagen...</p>
        )}
        {favorito ? (
          <button  onClick={() => this.sacarDelFav(dataPelicula.id)}>Sacar del Fav</button>
        ) : (
          <button  onClick={() => this.agregarAlFav(dataPelicula.id)}>Fav</button>
        )}
        <Link to={`/DetalleContenido/${data.id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    );
  }
}
