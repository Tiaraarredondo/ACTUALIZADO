import React, { Component } from 'react';
import './Busqueda.css';

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            busqueda: ''
        };
    }

    componentDidMount() {
        const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';

        // Trae las populares
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const pelis = [];
                for (let i = 0; i < 5; i++) {
                    pelis.push(data.results[i]);
                }

                
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
        const { pelis, busqueda } = this.state;

        const resultadosFiltrados = pelis.filter(peli =>
            peli.title.toLowerCase().includes(busqueda.toLowerCase())
        );

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
