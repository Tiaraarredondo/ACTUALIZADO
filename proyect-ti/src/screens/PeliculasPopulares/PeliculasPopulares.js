import React, { Component } from "react";
import PeliculasPopularesCard from "../../components/PeliculasPopulares/PeliculasPopularesCard/PeliculasPopularesCard";
import Header from "../../components/Header/Header";
import './styles.css';

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backupPeliculas: [],
            paginaActual: 1,
        };
    }

    componentDidMount() {
        const API_KEY = "9f66dc201448c71cc91c3c8c9f488105";
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${this.state.paginaActual}`;
    
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const nuevasPeliculas = data.results;
                const peliculasActualizadas = this.state.peliculas.concat(nuevasPeliculas);
                this.setState({
                    peliculas: peliculasActualizadas,
                    peliculasSinFiltro: peliculasActualizadas,
                    paginaActual: this.state.paginaActual,
                    backupPeliculas: peliculasActualizadas
                });
            })
            .catch((err) => console.log("Error al cargar las películas populares:", err));
    }

    traerPeliculas(page) {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const nuevasPeliculas = data.results;
                const peliculasActualizadas = this.state.peliculas.concat(nuevasPeliculas);
                this.setState({
                    peliculas: peliculasActualizadas,
                    peliculasSinFiltro: peliculasActualizadas,
                    paginaActual: page,
                });
            })
            .catch((err) => console.log("Error al cargar las películas:", err));
    }
    cargarMas = () => {
        this.traerPeliculas(this.state.paginaActual + 1);
    };

    filtrarPeliculas = (texto) => {
        if (texto === "") {
            this.setState({ peliculas: this.state.peliculasSinFiltro });
        } else {
            const pelisFiltradas = this.state.peliculasSinFiltro.filter((peli) =>
                peli.title.toLowerCase().includes(texto.toLowerCase())
            );
            this.setState({ peliculas: pelisFiltradas });
        }
    };

    render() {
        return (

            <>
                <Header></Header>
                <h1>Peliculas populares</h1>
                {
                    this.state.peliculas.length === 0 ? (
                        <p>Cargando películas...</p>
                    ) : (
                        <div className="populares-grid">
                            {this.state.peliculas.map((elm, idx) => (
                                <PeliculasPopularesCard data={elm} key={idx + elm.title} />
                            ))}
                        <button onClick={this.cargarMas}>Cargar más</button>
     
                        </div>
                    )
                }
            </>
        );
    }
}

export default PeliculasPopulares;
