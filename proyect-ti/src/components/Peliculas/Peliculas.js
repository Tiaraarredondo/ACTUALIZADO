import React from 'react';

function Peliculas({ data }) {
    return (
        <div>
            <h3>{data.title}</h3>
            <h4>Descripcion:</h4>
            <h4>{data.overview}</h4>
            <h4>Esta pelicula fue realizada el {data.release_date}, con ya {data.popularity} de espectadores desde entonces.</h4>
            <h4>Idioma Original:{data.original_language}</h4>
            {data.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                    alt={data.title}
                />
            ) : (
                <p>Sin imagen</p>
            )}
        </div>
    );
}

export default Peliculas;