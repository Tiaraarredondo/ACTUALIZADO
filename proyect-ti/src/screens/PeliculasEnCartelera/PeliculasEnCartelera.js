import React, { Component } from "react";
import Cartelera from "../../components/Cartelera/Cartelera";
import FiltroPeliculas from "../../components/FiltroPeliculas/FiltroPeliculas";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

class PeliculasEnCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backupPeliculas: [],
            paginaActual: 1,
        };
    }

    componentDidMount() {
        this.traerPeliculas(this.state.paginaActual)
    }

    traerPeliculas(page) {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let nuevasPeliculas = data.results;
                let peliculasActualizadas = this.state.peliculas.concat(nuevasPeliculas);
                this.setState({
                    peliculas: peliculasActualizadas,
                    backupPeliculas: peliculasActualizadas,
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
            this.setState({ peliculas: this.state.backupPeliculas });
        } else {
            let pelisFiltradas = this.state.backupPeliculas.filter((peli) =>
                peli.title.toLowerCase().includes(texto.toLowerCase())
            );
            this.setState({ peliculas: pelisFiltradas });
        }
    };

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Cartelera</h1>

                <FiltroPeliculas filtro={this.filtrarPeliculas} />

                {this.state.peliculas.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <div className="populares-grid">
  {this.state.peliculas.map((peli) => (
    <Cartelera key={peli.id} data={peli} />
  ))}
</div>
                )}

                <button onClick={this.cargarMas}>Cargar más</button>
                <Footer></Footer>
            </div>
        );
    }
}

export default PeliculasEnCartelera;
