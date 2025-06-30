import React from 'react'

export default function Cancion({cancion}) {
    const { img, title, artist } = cancion;
  return (
    <div className="card bg-transparent text-white border-0" style={{ minWidth: "200px", scrollSnapAlign: "start" }}>
        <img src={img} className="card-img-top" height="200" alt="Cancion"/>

        <div className="card-body">
            <h5 className="card-title fs-5">{title}</h5>
            <p className="card-text">{artist}</p>
        </div>
        
    </div>
  )
}
