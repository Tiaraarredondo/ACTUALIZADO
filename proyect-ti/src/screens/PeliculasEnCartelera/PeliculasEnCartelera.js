import React, { Component } from "react";
import Cartelera from "../../components/Cartelera/Cartelera";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './styles.css';

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

class PeliculasEnCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasSinFiltro: [],
            paginaActual: 1,
        };
    }

    componentDidMount() {
        this.traerPeliculas(this.state.paginaActual);
    }

    traerPeliculas(page) {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;
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
            <div>
                <Header />
                <h1>Peliculas Cartelera</h1>

                {
                    this.state.peliculas.length === 0 ? (
                        <p>Cargando películas...</p>
                    ) : (
                        <>
                            <div className="grid">
                                {this.state.peliculas.map((elm, idx) => (
                                    <Cartelera data={elm} key={idx + elm.title} />
                                ))}
                            </div>

                            <div className="contenedor-cargar-mas">
                                <button onClick={this.cargarMas}>Cargar más</button>
                            </div>
                        </>
                    )
                }

                <Footer />
            </div>
        );
    }
    
}

export default PeliculasEnCartelera;
