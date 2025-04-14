import React, { Component } from 'react'

export default class DetalleContenido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataContenido: null,
      favorito: false
    }
  }

  componentDidMount() {
    const { id, tipo } = this.props.match.params; // `id` y `tipo` de la URL
    this.obtenerDetalle(id, tipo)
  }

  obtenerDetalle(id, tipo) {
    let url = '';
    if (tipo === 'pelicula') {
      url = `https://api.themoviedb.org/3/movie/${id}?api_key=9f66dc201448c71cc91c3c8c9f488105`; // URL de película
    } else if (tipo === 'serie') {
      url = `https://api.themoviedb.org/3/tv/${id}?api_key=9f66dc201448c71cc91c3c8c9f488105`; // URL de serie
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ dataContenido: data });
        this.checkFavorito(id);
      })
      .catch(err => console.log("Error al obtener los detalles:", err));
  }

  checkFavorito(id) {
    let favoritos = localStorage.getItem('Fav');
    if (favoritos !== null) {
      let favoritosParseados = JSON.parse(favoritos);
      let estaEnFavoritos = favoritosParseados.includes(id);
      if (estaEnFavoritos) {
        this.setState({ favorito: true });
      }
    }
  }

  agregarAFavoritos(id) {
    let favoritos = localStorage.getItem('Fav');
    if (favoritos !== null) {
      let favoritosParseados = JSON.parse(favoritos);
      favoritosParseados.push(id);
      localStorage.setItem('Fav', JSON.stringify(favoritosParseados));
    } else {
      let nuevoFavorito = [id];
      localStorage.setItem('Fav', JSON.stringify(nuevoFavorito));
    }
    this.setState({ favorito: true });
  }

  sacarDeFavoritos(id) {
    let favoritos = localStorage.getItem('Fav');
    let favoritosParseados = JSON.parse(favoritos);
    let nuevosFavoritos = favoritosParseados.filter(fav => fav !== id);
    localStorage.setItem('Fav', JSON.stringify(nuevosFavoritos));
    this.setState({ favorito: false });
  }

  render() {
    const { dataContenido, favorito } = this.state;
    if (!dataContenido) {
      return <p>Cargando...</p>
    }

    return (
      <div className="detalle-contenido">
        <h1>{dataContenido.title || dataContenido.name}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${dataContenido.poster_path}`} alt={dataContenido.title || dataContenido.name} />
        <p><strong>Calificación:</strong> {dataContenido.vote_average}</p>
        <p><strong>Fecha de estreno:</strong> {dataContenido.release_date || dataContenido.first_air_date}</p>
        <p><strong>Duración:</strong> {dataContenido.runtime ? `${dataContenido.runtime} minutos` : 'Desconocido'}</p>
        <p><strong>Género:</strong> {dataContenido.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Sinópsis:</strong> {dataContenido.overview}</p>

        {
          favorito ?
          <button onClick={() => this.sacarDeFavoritos(dataContenido.id)}>Sacar de favoritos</button>
          :
          <button onClick={() => this.agregarAFavoritos(dataContenido.id)}>Agregar a favoritos</button>
        }
      </div>
    );
  }
}

