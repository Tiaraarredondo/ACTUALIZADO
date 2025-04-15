import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './styles.css';

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true
    };
  }

  componentDidMount() {
    const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';
    const query = this.props.match.params.query;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ resultados: data.results, cargando: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { resultados, cargando } = this.state;

    return (
      <div>
        
          <Header></Header>
        <h2>Resultados de la búsqueda</h2>
        {cargando ? (
          <p>Cargando...</p>
        ) : resultados.length === 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          <ul>
            {resultados.map((peli, i) => (
              <li key={i}>
                <h4>{peli.title}</h4>
                <img
                  src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`}
                  alt={peli.title}
                />
              </li>
            ))}
          </ul>
        )}
        <Footer></Footer>
      </div>
    );
  }
}

export default Resultados;
