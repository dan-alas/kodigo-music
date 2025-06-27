import React from 'react'

export default function Album({album}) {

    const { img, name, artist } = album;
  return (
    <div className="card bg-light text-white border-0" style={{minWidth: "200px", scrollSnapAlign: "start"}}>
        <img src={img} className="card-img-top" height="190" alt={name}/>
        <div className="card-body">
            <h5 className="card-title fs-5">{name}</h5>
            <p className="card-text">{artist}</p>
        </div>
    </div>
  )
}
