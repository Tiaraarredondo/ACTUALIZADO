import React, {Component} from "react";
import Cartelera from "../../components/Cartelera/Cartelera";

let apiKey = "9f66dc201448c71cc91c3c8c9f488105";
let url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

class PeliculasEnCartelera extends Component {
    constructor(props){
        super(props)
        this.state = {
            Peliculas: [],
            backupPeliculas: []
        }
    }

    apiCall(){
        fetch(url)
        .then((response) => response.json())
        .then(( data ) => this.setState({
            Peliculas:data.results, 
            backupPeliculas: data.results
        }))
        .catch((error) => console.log(error) )
    }

    traerMas() {
        this.apiCall(url)
    }

    componentDidMount(){
        console.log("Funciono");
        this.traerMas()
    }

    mostrarPeliculas = (data) => {
        this.setState(
            {
                peliculas : data.data.Peliculas
            }
        )
    }

    componentDidUpdate(){
        console.log("actualice");
    }

    render(){
        console.log("actualizado");
        let contenido;
        
        if (this.state.Peliculas.length === 0) {
            contenido = <p>Cargando...</p>
        } else {
            contenido = this.state.Peliculas.slice(0,5).map((pelicula, idx) => (
                <Cartelera data={pelicula} key={idx} />
            ));
        }
        return (
            <>
                <h1>Now Playing</h1>
                {contenido}
                <button onClick={() => this.traerMas()}>Cargar más</button>
            </>
        );
    }
}
export default PeliculasEnCartelera