import React from 'react'
import Busqueda from '../../components/Busqueda/Busqueda';
import CincoPP from '../../components/CincoPP/CincoPP';
import CincoPC from '../../components/CincoPC/CincoPC';
import './Home.css';
import Footer from '../../components/Footer/Footer';

function Home(){

    return(
    <React.Fragment>

    <main>
    <Busqueda />
      
      <CincoPP />
      
      <CincoPC />

    </main>
    <Footer />
    </React.Fragment>
    )
}

export default Home

