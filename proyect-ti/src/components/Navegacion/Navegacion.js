import React from 'react'
import OpcionesMenu from './OpcionesMenu'
import './styles.css'

function Navegacion(){
    const opciones = [
        {
            nombre: 'Home',
            path:'/'
        },
        {
            nombre: 'Favoritos',
            path:'/Favoritos'
        },
        {
            nombre: 'Peliculas Populares',
            path:'/PeliculasPopulares'
        },
        {
            nombre: 'Peliculas en Cartel',
            path:'/PeliculasEnCartelera'
        },
        
    ]
    return(
    <nav>
        <OpcionesMenu opciones={opciones} />
    </nav>
    )
}

export default Navegacion