import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";

class PeliculasPopularesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: {},
            favorito: false,
            
        };
    }

    componentDidMount() {
        const id = this.props.data.id;
    
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ dataPelicula: data });
    
            const storage = localStorage.getItem('Fav');
            if (storage !== null) {
              const arrParseado = JSON.parse(storage);
              if (arrParseado.includes(data.id)) {
                this.setState({ favorito: true });
              }
            }
          })
          .catch((err) => console.log(err));
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

    

    render() {
        const { dataPelicula, favorito } = this.state;

        return (
            <div className="card">
                <h3>{this.props.data.title}</h3>

               

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
                <Link to={`/DetalleContenido/${dataPelicula.id}`}>
          <button>Ver Detalle</button>
        </Link>
                 {favorito ? (
          <button  onClick={() => this.sacarDelFav(dataPelicula.id)}>Sacar del Fav</button>
        ) : (
          <button onClick={() => this.agregarAlFav(dataPelicula.id)}>Fav</button>
        )}
            </div>
            
        );
    }
}

export default PeliculasPopularesCard;
