import React from 'react'

export default function Detalle(props) {
  const idPelicula = props.match.params.id
  return (
    <div>Detalle de la peli {idPelicula}</div>
  )
}

TIARAAAA