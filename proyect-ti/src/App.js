//aqui es donde generamos la estructura de la app y tambiene es el componente principal
import React from "react";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <p>hola esto</p>
    {/* JSX: extension de Js la cual produce elementos html */}
    <Footer />
    </>
  );
}
export default App;
