import React, { Component } from "react";
import OpcionesPeliculas from "../Peliculas/OpcionesPeliculas";

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    apiCall = (url, consecuencia) => {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.error(error));
    }

    componentDidMount() {
        console.log("Funciono!");
        const API_KEY = "9f66dc201448c71cc91c3c8c9f488105";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

        this.apiCall(url, this.mostrarPeliculas);
    }

    mostrarPeliculas = (data) => {
        console.log("Películas", data.results);
        this.setState({
            peliculas: data.results || [],
        });
    }

    render() {
        return (
           <nav>
        <OpcionesPeliculas peliculas={peliculas} />
    </nav>
        );
    }
}

export default Peliculas;
