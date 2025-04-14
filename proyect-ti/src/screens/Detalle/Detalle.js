import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeliculasEnCartelera from './components/PeliculasEnCartelera/PeliculasEnCartelera';
import DetalleContenido from './components/DetalleContenido/DetalleContenido';  // Importamos el componente de detalle
import Header from '../../components/Header/Header';
function App() {
  return (
    <div>   <Header></Header>
    <Router>
   
      <Switch>
        
        <Route exact path="/" component={PeliculasEnCartelera} />
        <Route path="/DetalleContenido/:id" component={DetalleContenido} /> {/* Agregamos la ruta para el detalle */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
