import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CincoPP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            populares: [],
            favoritos: [],
            mostrarDescripcion: null // almacena el ID de la peli que se muestra
        };
    }

    componentDidMount() {
        const favoritos = localStorage.getItem('Fav');
        if (favoritos) {
            this.setState({ favoritos: JSON.parse(favoritos) });
        }

        const API_KEY = '9f66dc201448c71cc91c3c8c9f488105';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const cincoPopulares = data.results.slice(0, 5);
                this.setState({ populares: cincoPopulares });
            })
            .catch(err => console.log(err));
    }

    mostrarOcultarDescripcion(id) {
        this.setState(prevState => ({
            mostrarDescripcion: prevState.mostrarDescripcion === id ? null : id
        }));
    }

    agregarAlFav(id) {
        let storage = localStorage.getItem('Fav');
        let arr = storage ? JSON.parse(storage) : [];

        if (!arr.includes(id)) {
            arr.push(id);
            localStorage.setItem('Fav', JSON.stringify(arr));
        }

        this.setState({ favoritos: arr });
    }

    sacarDelFav(id) {
        let storage = localStorage.getItem('Fav');
        let arr = storage ? JSON.parse(storage) : [];

        let nuevoArr = arr.filter(elm => elm !== id);
        localStorage.setItem('Fav', JSON.stringify(nuevoArr));

        this.setState({ favoritos: nuevoArr });
    }

    render() {
        const { populares, favoritos, mostrarDescripcion } = this.state;

        return (
            <div>
                <Link to={`/PeliculasPopulares`}>
                    <h2>Películas Populares</h2>
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

                                <button onClick={() => this.mostrarOcultarDescripcion(peli.id)}>
                                    {mostrarDescripcion === peli.id
                                        ? 'Ocultar descripción'
                                        : 'Ver descripción'}
                                </button>

                                {mostrarDescripcion === peli.id && (
                                    <>
                                        <h4>Descripción:</h4>
                                        <p>{peli.overview}</p>
                                    </>
                                )}

                                {favoritos.includes(peli.id) ? (
                                    <button onClick={() => this.sacarDelFav(peli.id)}>Sacar del Fav</button>
                                ) : (
                                    <button onClick={() => this.agregarAlFav(peli.id)}>Fav</button>
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
