import React, { Component } from 'react';
import './Busqueda.css';

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todas: [],
            busqueda: ''
        };
    }

    componentDidMount() {
        const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';

        // Trae las populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const populares = [];
                for (let i = 0; i < 5; i++) {
                    populares.push(data.results[i]);
                }

                // Trae las de cartelera
                fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        const cartelera = [];
                        for (let i = 0; i < 5; i++) {
                            cartelera.push(data.results[i]);
                        }

                        // Evitar duplicados con un objeto de control
                        const todas = [];
                        const idsUsados = {};

                        for (let i = 0; i < populares.length; i++) {
                            const peli = populares[i];
                            if (!idsUsados[peli.id]) {
                                todas.push(peli);
                                idsUsados[peli.id] = true;
                            }
                        }

                        for (let i = 0; i < cartelera.length; i++) {
                            const peli = cartelera[i];
                            if (!idsUsados[peli.id]) {
                                todas.push(peli);
                                idsUsados[peli.id] = true;
                            }
                        }

                        this.setState({ todas });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    evitarSubmit = (event) => {
        event.preventDefault();
    }

    controlarCambios = (event) => {
        this.setState({ busqueda: event.target.value });
    }

    render() {
        const { todas, busqueda } = this.state;

        // Filtro sin includes
        const resultadosFiltrados = [];
        for (let i = 0; i < todas.length; i++) {
            const titulo = todas[i].title.toLowerCase();
            const busq = busqueda.toLowerCase();

            let coincide = true;
            for (let x = 0; x < busq.length; x++) {
                if (titulo[x] !== busq[x]) {
                    coincide = false;
                    break;
                }
            }

            if (coincide) {
                resultadosFiltrados.push(todas[i]);
            }
        }

        let resultadosBusqueda;
        if (busqueda) {
            if (resultadosFiltrados.length === 0) {
                resultadosBusqueda = <p>No hay resultados</p>;
            } else {
                resultadosBusqueda = (
                    <ul>
                        {resultadosFiltrados.map((peli, i) => (
                            <li key={i}>
                                <h4>{peli.title}</h4>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`}
                                    alt={peli.title}
                                />
                            </li>
                        ))}
                    </ul>
                );
            }
        }

        return (
            <div>
                <form onSubmit={this.evitarSubmit}>
                    <input
                        type="text"
                        placeholder="Buscar película"
                        value={busqueda}
                        onChange={this.controlarCambios}
                    />
                    <input type="submit" value="Buscar" />
                </form>

                {resultadosBusqueda}
            </div>
        );
    }
}

export default Busqueda;
