import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            populares: [],
            cartelera: [],
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

    render() {
        return (
            <div>
                <h1>Películas Populares</h1>
                {this.state.populares.length === 0 ? <p>Cargando...</p> :
                    <ul>
                        {this.state.populares.map((peli, i) => (
                            <li key={i}>
                                <h3>{peli.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`} alt={peli.title} />
                            </li>
                        ))}
                    </ul>
                }

                <h1>Películas en Cartelera</h1>
                {this.state.cartelera.length === 0 ? <p>Cargando...</p> :
                    <ul>
                        {this.state.cartelera.map((peli, i) => (
                            <li key={i}>
                                <h3>{peli.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`} alt={peli.title} />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

export default Home;
