import React from 'react';

function PeliculasPopularesCard({ data }) {
    return (
        <div>
           
            <h3>{data.title}</h3>
            <h4>Descripcion:</h4>
            <h4>{data.overview}</h4>
            
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

export default PeliculasPopularesCard;
