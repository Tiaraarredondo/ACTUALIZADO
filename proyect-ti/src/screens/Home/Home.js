import React from 'react'
import Busqueda from '../../components/Busqueda/Busqueda';
import Header from '../../components/Header/Header'
import CincoPP from '../../components/CincoPP/CincoPP';
import CincoPC from '../../components/CincoPC/CincoPC';
import './Home.css';

function Home(){

    return(
    <React.Fragment>
    <Header></Header>

    <main>
    <Busqueda />
      
      <CincoPP />
      
      <CincoPC />

    </main>
    </React.Fragment>
    )
}

export default Home

