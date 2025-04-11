import React from 'react';

function OpcionesPeliculas(props) {
    return (
        <div>
            <h1>Películas </h1>
            {props.pelicula.length === 0 ? (
                <p>Cargando...</p>
            ) : (
                <ul>
                    {props.peliculas.map((pelicula) => (
                        <li key={pelicula.id}>
                            <h3>{pelicula.title}</h3>
                            {
                                pelicula.poster_path
                                    ? <img
                                        src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                                        alt={pelicula.title}
                                    />
                                    : null
                            }
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default OpcionesPeliculas;