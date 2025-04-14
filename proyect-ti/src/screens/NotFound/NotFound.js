import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './style.css';
import Img from './Img/Error 404.png'

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Header />
      <div className="notfound-container">
        <div className="notfound-message">
          <h1>¡Ups!</h1>
          <p>Error 404 - Página no encontrada</p>
          
          <a href="/" className="back-home-btn">Volver al inicio</a>
        </div>
        <img src={Img} alt="Error 404" className="notfound-img" />
      </div>
      
      <Footer />
    </Fragment>
  );
}
