import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CincoPP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            populares: [],
            favorito: false,
            mostrarDescripcion: false
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
    mostrarOcultarDescripcion() {
        if (this.state.mostrarDescripcion === true) {
            this.setState({
                mostrarDescripcion: false
            });
        } else {
            this.setState({
                mostrarDescripcion: true
            });
        }
    }
    agregarAlFav(id) {
        let storage = localStorage.getItem('Fav');
        if (storage !== null) {
            let arrParseado = JSON.parse(storage);
            if (!arrParseado.includes(id)) {
                arrParseado.push(id);
                let arrStringificado = JSON.stringify(arrParseado);
                localStorage.setItem('Fav', arrStringificado);
            }
        } else {
            let primerID = [id];
            let arrStringificado = JSON.stringify(primerID);
            localStorage.setItem('Fav', arrStringificado);
        }

        this.setState({
            favorito: true,
        });
    }

    sacarDelFav(id) {
        const storage = localStorage.getItem('Fav');
        const storageParseado = JSON.parse(storage);
        const filtrarStorage = storageParseado.filter((elm) => elm !== id);
        const storageStringificado = JSON.stringify(filtrarStorage);
        localStorage.setItem('Fav', storageStringificado);

        this.setState({
            favorito: false,
        });
    }
    goToPopulares = () => {
        this.props.history.push(`/PeliculasPopulares`);
    };

    render() {
        const { populares, favorito, dataPelicula } = this.state;

        return (
            <div>
                     <Link to={`/PeliculasPopulares`}>
                
                                    <h2>Peliculas Populares</h2>
                    
                
                                </Link>
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
                                <button onClick={() => this.mostrarOcultarDescripcion()}>
                                    {
                                        this.state.mostrarDescripcion === true
                                            ? 'Ocultar descripción' : 'Ver descripción'
                                    }
                                </button>

                                {
                                    this.state.mostrarDescripcion === true
                                        ? (
                                            <>
                                                <h4>Description:</h4>
                                                <p>{this.props.data.overview}</p>
                                            </>
                                        )
                                        : null
                                }

                                {favorito ? (
                                    <button onClick={() => this.sacarDelFav(dataPelicula.id)}>Sacar del Fav</button>
                                ) : (
                                    <button onClick={() => this.agregarAlFav(dataPelicula.id)}>Fav</button>
                                )}



                            </li>
                        ))}
                    </ul>
                )}

            </div>
        );
    }
}

export default CincoPP;
