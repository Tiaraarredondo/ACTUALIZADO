import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CincoPC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartelera: []
        };
    }

    componentDidMount() {
        const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                let cincoCartelera = [];
                for (let i = 0; i < 5; i++) {
                    cincoCartelera.push(data.results[i]);
                }
                this.setState({ cartelera: cincoCartelera });
            })
            .catch(err => console.log(err));
    }
    goToDetalle = (id) => {
        this.props.history.push(`/DetalleContenido/${id}`);
    };

    render() {
        const { cartelera } = this.state;

        return (
            <div>
                <h2>Películas en Cartelera</h2>
                {cartelera.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <ul>
                    {cartelera.map((peli, i) => (
                      <li key={i}>
                        {/* Link al detalle */}
                        <Link to={`/DetalleContenido/${peli.id}`}>
                        
                          <h3>{peli.title}</h3>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`}
                            alt={peli.title}
                          />
                          
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
        );
    }
}

export default CincoPC;





















