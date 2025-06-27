import React from 'react'

export default function Artista({artista}) {
    const { img, name, description } = artista;
  return (
    <div style={{ minWidth: "150px" }}>
        <img src={img} className="rounded-circle" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt={name}/>
        <h5 className="fs-5 mt-2">{name}</h5>
        <p>{description}</p>
    </div>

  )
}
