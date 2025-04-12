import React, { Component } from "react";
import PeliculasPopularesCard from "../../components/PeliculasPopulares/PeliculasPopularesCard/PeliculasPopularesCard";
import './styles.css';

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backupPeliculas: [],
        };
    }

    componentDidMount() {
        const API_KEY = "9f66dc201448c71cc91c3c8c9f488105";
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    peliculas: data.results,
                    backupPeliculas: data.results
                })
            )
            .catch((error) => console.error(error));
    }

    render() {
        return (

            <>
                <h1>Peliculas populares</h1>
                {
                    this.state.peliculas.length === 0 ? (
                        <p>Cargando películas...</p>
                    ) : (
                        <div className="populares-grid">
                            {this.state.peliculas.map((elm, idx) => (
                                <PeliculasPopularesCard data={elm} key={idx + elm.title} />
                            ))}
                        </div>
                    )
                }
            </>
        );
    }
}

export default PeliculasPopulares;
