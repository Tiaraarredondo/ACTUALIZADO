import React from "react";
import OpcionesMenu from "./OpcionesMenu";

function Header() {
    console.log('a change')
    let opciones = [
        {
            name:'Home',
            path: '/'
        },
      
        {
            name:'Favoritos',
            path: '/'
        },
        {
            name:'Populares',
            path: '/'
        },
        {
            name:'En cartelera',
            path: '/'
        },

    ]
    return (
        <header>
            <h1>2 WATCH</h1>
            <OpcionesMenu config={opciones} />
        </header>
    )
}

export default Header