import React, { Component } from "react";
import Cartelera from "../../components/Cartelera/Cartelera"; // El componente que muestra los detalles de cada película
import Header from "../../components/Header/Header";

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: [],
    };
  }

  componentDidMount() {
    // Al montar el componente, obtenemos los IDs de las películas favoritas del localStorage
    let favoritosStorage = localStorage.getItem("Fav");
    if (favoritosStorage !== null) {
      // Si hay datos en el localStorage, los parseamos
      let favoritosIDs = JSON.parse(favoritosStorage);
      this.setState({ favoritos: favoritosIDs });
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <h1>Mis Favoritos</h1>

        {/* Si no hay favoritos, mostramos un mensaje */}
        {this.state.favoritos.length === 0 ? (
          <p>No tienes favoritos aún.</p>
        ) : (
          <div className="populares-grid">
            {/* Mapeamos cada ID de película en favoritos para mostrarla */}
            {this.state.favoritos.map((id, idx) => (
              <Cartelera data={{ id }} key={idx} /> // Asumiendo que Cartelera toma un `id` como prop
            ))}
          </div>
        )}
      </div>
    );
  }
}
