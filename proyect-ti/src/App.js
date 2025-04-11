//aqui es donde generamos la estructura de la app y tambiene es el componente principal
import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
<<<<<<< HEAD
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
=======
import Peliculas from "./components/Peliculas/Peliculas";
import PeliculasEnCartelera from "./screens/PeliculasEnCartelera/PeliculasEnCartelera";
>>>>>>> 28d0ae3334078d53ef505a19c802d1255e98b5a2
// import Detalle from "./screens/Detalle/Detalle";
// import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <>
    <Header/>
        <Switch>
        <Route path={'/'} exact={true} component={Home} />
<<<<<<< HEAD
        <Route path={'/peliculasPopulares'} component={PeliculasPopulares} />
=======
        <Route path={'/peliculas'} component={Peliculas} />
        <Route path={'/PeliculasEnCartelera'} component={PeliculasEnCartelera} />
>>>>>>> 28d0ae3334078d53ef505a19c802d1255e98b5a2
        {/* <Route path={'/detalle/:id'} component={Detalle} /> */}
        {/* <Route path={''} component={NotFound} /> */}
      </Switch>
    {/* JSX: extension de Js la cual produce elementos html */}
    <Footer />
    </>
  );
}
export default App;
