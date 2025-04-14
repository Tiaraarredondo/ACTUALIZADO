import React, { Component } from 'react';
import './styles.css';
let apiKey = "9f66dc201448c71cc91c3c8c9f488105";


class DetalleContenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
      favorito: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params; // Aquí obtenemos el id de la URL

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ pelicula: data });

        let favoritos = localStorage.getItem('Fav');
        if (favoritos !== null) {
          let arr = JSON.parse(favoritos);
          if (arr.includes(data.id)) {
            this.setState({ favorito: true });
          }
        }
      })
      .catch(err => console.log(err));
  }

  agregarAFavoritos(id) {
    let favs = localStorage.getItem('Fav');
    if (favs !== null) {
      let arr = JSON.parse(favs);
      if (!arr.includes(id)) {
        arr.push(id);
        localStorage.setItem('Fav', JSON.stringify(arr));
      }
    } else {
      let nuevoArr = [id];
      localStorage.setItem('Fav', JSON.stringify(nuevoArr));
    }
    this.setState({ favorito: true });
  }

  sacarDeFavoritos(id) {
    let favs = localStorage.getItem('Fav');
    if (favs !== null) {
      let arr = JSON.parse(favs);
      let nuevoArr = arr.filter(elm => elm !== id);
      localStorage.setItem('Fav', JSON.stringify(nuevoArr));
    }
    this.setState({ favorito: false });
  }

  render() {
    const { pelicula, favorito } = this.state;

    return (
      
      <div className="detalle">
        
        <h2>{pelicula.title}</h2>

        {pelicula.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`}
            alt={pelicula.title}
          />
        ) : (
          <p>Imagen no disponible</p>
        )}

        <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
        <p><strong>Duración:</strong> {pelicula.runtime} min</p>
        
        <p><strong>Genre:</strong> {pelicula.genre_ids}</p>

        {favorito ? (
          <button onClick={() => this.sacarDeFavoritos(pelicula.id)}>Sacar de Favoritos</button>
        ) : (
          <button onClick={() => this.agregarAFavoritos(pelicula.id)}>Agregar a Favoritos</button>
        )}
      </div>
    );
  }
}

export default DetalleContenido;
