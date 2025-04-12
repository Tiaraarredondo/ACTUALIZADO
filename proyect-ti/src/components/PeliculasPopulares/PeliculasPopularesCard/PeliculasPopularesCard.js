import React from 'react';
import './styles.css';

function PeliculasPopularesCard({ data }) {
    return (
        <div className="card">
            <h3>{data.title}</h3>
            <h4>Descripción:</h4>
            <p>{data.overview}</p>

            {data.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                    alt={data.title}
                />
            ) : (
                <p className="no-img">Sin imagen</p>
            )}
        </div>
    );
}

export default PeliculasPopularesCard;
