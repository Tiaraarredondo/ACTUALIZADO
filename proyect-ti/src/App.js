//aqui es donde generamos la estructura de la app y tambiene es el componente principal
import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Peliculas from "./components/Peliculas/Peliculas";
import PeliculasEnCartelera from "./screens/PeliculasEnCartelera/PeliculasEnCartelera";
// import Detalle from "./screens/Detalle/Detalle";
// import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <>
    <Header/>
        <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/peliculas'} component={Peliculas} />
        <Route path={'/PeliculasEnCartelera'} component={PeliculasEnCartelera} />
        {/* <Route path={'/detalle/:id'} component={Detalle} /> */}
        {/* <Route path={''} component={NotFound} /> */}
      </Switch>
    {/* JSX: extension de Js la cual produce elementos html */}
    <Footer />
    </>
  );
}
export default App;
