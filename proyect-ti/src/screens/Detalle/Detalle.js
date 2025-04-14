import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeliculasEnCartelera from './components/PeliculasEnCartelera/PeliculasEnCartelera';
import DetalleContenido from './components/DetalleContenido/DetalleContenido';  // Importamos el componente de detalle

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PeliculasEnCartelera} />
        <Route path="/detalle/:tipo/:id" component={DetalleContenido} /> {/* Agregamos la ruta para el detalle */}
      </Switch>
    </Router>
  );
}

export default App;
