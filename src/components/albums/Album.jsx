import React from 'react'

export default function Album({album}) {

    const { img, name, artist } = album;
  return (
    <div className="card bg-transparent text-white border-0 cancion">
        <img src={img} className="card-img-top img-card" alt={name}/>
        <div className="card-body px-0">
            <h5 className="card-title fs-6 fs-md-5">{name}</h5>
            <p className="card-text">{artist}</p>
        </div>
    </div>
  )
}
