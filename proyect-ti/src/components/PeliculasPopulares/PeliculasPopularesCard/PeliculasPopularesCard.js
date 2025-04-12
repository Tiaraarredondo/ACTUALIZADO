import React, { Component } from 'react';
import './styles.css';

class PeliculasPopularesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false
        };
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

    render() {
        return (
            <div className="card">
                <h3>{this.props.data.title}</h3>

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
                            <h4>Descripción:</h4>
                            <p>{this.props.data.overview}</p>
                        </>
                    )
                    : null
                }

                {
                    this.props.data.poster_path !== null
                    ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${this.props.data.poster_path}`}
                            alt={this.props.data.title}
                        />
                    )
                    : <p className="no-img">Sin imagen</p>
                }
            </div>
        );
    }
}

export default PeliculasPopularesCard;
