import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CincoPP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            populares: []
        };
    }

    componentDidMount() {
        const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                let cincoPopulares = [];
                for (let i = 0; i < 5; i++) {
                    cincoPopulares.push(data.results[i]);
                }
                this.setState({ populares: cincoPopulares });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { populares } = this.state;

        return (
            <div>
                <h2>Popular Movies</h2>
                {populares.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <ul>
                        {populares.map((peli, i) => (
                            <li key={i}>
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

export default CincoPP;
