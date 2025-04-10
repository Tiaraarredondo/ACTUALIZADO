//aqui es donde generamos la estructura de la app y tambiene es el componente principal
import React from "react";
import Footer from './components/Footer/Footer';
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
// import Detalle from "./screens/Detalle/Detalle";
// import NotFound from "./screens/NotFound/NotFound";
import Header from './components/Header/Header';
import Navegacion from './components/Navegacion/Navegacion';

function App() {
  return (
    <>
    <Navegacion/>
    <Header/>
        <Switch>
        <Route path={'/'} exact={true} component={Home} />
        {/* <Route path={'/detalle/:id'} component={Detalle} /> */}
        {/* <Route path={''} component={NotFound} /> */}
      </Switch>
    {/* JSX: extension de Js la cual produce elementos html */}
    <Footer />
    </>
  );
}
export default App;
