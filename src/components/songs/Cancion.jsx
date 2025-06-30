import React from 'react'

export default function Cancion({cancion}) {
    const { img, title, artist } = cancion;
  return (
    <div className="card bg-transparent text-white border-0 cancion">
        <img src={img} className="card-img-top img-card" alt="Cancion"/>

        <div className="card-body">
            <h5 className="card-title fs-6 fs-md-5">{title}</h5>
            <p className="card-text">{artist}</p>
        </div>
        
    </div>
  )
}
