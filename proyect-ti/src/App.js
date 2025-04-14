import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import PeliculasPopulares from './screens/PeliculasPopulares/PeliculasPopulares';
import PeliculasEnCartelera from './screens/PeliculasEnCartelera/PeliculasEnCartelera';
import Favoritos from './screens/Favoritos/Favoritos';
import NotFound from './screens/NotFound/NotFound';
import DetalleContenido from './components/DetalleContenido/DetalleContenido';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/PeliculasPopulares' component={PeliculasPopulares} />
        <Route path='/PeliculasEnCartelera' component={PeliculasEnCartelera} />
        <Route path='/Favoritos' component={Favoritos} />
        <Route component={NotFound} />
        <Route path="/detalle/:tipo/:id" component={DetalleContenido} />
      </Switch>
    </Router>
  );
}

export default App;

