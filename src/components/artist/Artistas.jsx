import React from 'react'
import { artistas } from '../../data/artist-db' 
import Artista from './Artista'

export default function Artistas() {
  return (
    <section className="container px-0 px-md-3">
    <h2 className="fs-4">Artistas Populares</h2>
    <div className="d-flex gap-2 gap-md-5 pb-2 scroll-x-hide mt-4" style={{ overflowX: "auto" }}>
        {artistas.map((artista, index) => (
        <Artista key={index} artista={artista} />
        ))}
        
    </div>
    </section>
  )
}
