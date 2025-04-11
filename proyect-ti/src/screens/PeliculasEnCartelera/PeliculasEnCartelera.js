import react, {Component} from "react";
import Cartelera from "../../components/Cartelera/Cartelera";

class PeliculasEnCartelera extends Component {
    constructor(props){
        super(props)
        this.state = {
            Peliculas: [],
            backupPeliculas: []
        }
    }

    componentDidMount(){
        let apiKey = "9f66dc201448c71cc91c3c8c9f488105";
        let url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
        fetch(url)
        .then((response) => response.json())
        .then(( data ) => this.setState({
            Peliculas:data.results, 
            backupPeliculas: data.results
        }))
        .catch((error) => console.log(error) )
    }

    render(){
        return(
            <>
            <h1>Soy los Peliculas En Cartelera</h1>
            {
                this.state.Peliculas.length === 0 ?
                <h1>Cargando Peliculas</h1>
                :
                this.state.Peliculas.map((elm, idx) => <Cartelera data={elm} key={idx + elm.title} /> )

            }
            </>
        )
    }
}

export default PeliculasEnCartelera