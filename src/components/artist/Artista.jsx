import React from 'react'

export default function Artista({artista}) {
    const { img, name, description } = artista;
  return (
    <div style={{ minWidth: "150px" }}>
        <img src={img} className="rounded-circle artist-img" alt={name}/>
        <h5 className="fs-6 fs-md-5 mt-2 text-center">{name}</h5>
        <p>{description}</p>
    </div>

  )
}
