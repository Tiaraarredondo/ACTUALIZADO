import React, { Component } from "react";
import Cartelera from "../../components/Cartelera/Cartelera";

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      paginaActual: 1,
    };
  }

  componentDidMount() {
    this.traerPeliculas(this.state.paginaActual);
  }

  traerPeliculas(page) {
    const { endpoint } = this.props; 
    const url = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&page=${page}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          paginaActual: page,
        });
      })
      .catch((err) => console.log(err));
  }

  cargarMas = () => {
    this.traerPeliculas(this.state.paginaActual + 1);
  };

  render() {
    const { titulo } = this.props;

    return (
      <div>
        <h1>{titulo}</h1>

        {this.state.peliculas.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          this.state.peliculas.map((pelicula, idx) => (
            <Cartelera data={pelicula} key={idx} />
          ))
        )}

        <button onClick={this.cargarMas}>Cargar más</button>
      </div>
    );
  }
}

export default Peliculas;
