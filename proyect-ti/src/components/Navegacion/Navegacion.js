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
            nombre: 'About us',
            path:'/aboutus'
        },
        
    ]
    return(
    <nav>
        <OpcionesMenu opciones={opciones} />
        <ul className="user">
            <li>Nombre usuario 
                <img src="./img/user.jpg" alt="" />
            </li>
        </ul>
    </nav>
    )
}

export default Navegacion