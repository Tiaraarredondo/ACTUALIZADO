import React, { Component } from "react";
import FiltroPeliculas from "../../components/Peliculas/FiltroPeliculas/FiltroPeliculas";
import PeliculasCard from "../../components/Peliculas/Peliculas"; 

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backupPeliculas: []
        };
    }

    componentDidMount() {
        const API_KEY = "9f66dc201448c71cc91c3c8c9f488105";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: data.results,
                backupPeliculas: data.results
            }))
            .catch(error => console.log(error));
    }

    filtrarPeliculas = (texto) => {
        const filtradas = this.state.backupPeliculas.filter(peli =>
            peli.title.toLowerCase().includes(texto.toLowerCase())
        );
        this.setState({ peliculas: filtradas });
    }

    render() {
        return (
            <>
                <h1>Todas las Películas</h1>
                <FiltroPeliculas filtro={this.filtrarPeliculas} />
                {
                    this.state.peliculas.length === 0
                        ? <p>Cargando...</p>
                        : this.state.peliculas.map((pelicula, idx) => (
                            <PeliculasCard key={idx} data={pelicula} />
                        ))
                }
            </>
        );
    }
}

export default Home;


