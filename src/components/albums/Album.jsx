import React from 'react'

export default function Album({album}) {

    const { img, name, artist, url } = album;
  return (
    <div className="card bg-transparent text-white border-0 cancion">
        <a href={url} target='_blank'>
          <img src={img} className="card-img-top img-card" alt={name}/>
        </a>
        
        <div className="card-body px-0">
            <h5 className="card-title fs-6 fs-md-5">{name}</h5>
            <p className="card-text">{artist}</p>
        </div>
    </div>
  )
}
