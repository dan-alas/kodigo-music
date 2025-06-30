import React from 'react'
import { canciones } from '../../data/canciones-db'
import Cancion from './Cancion'

export default function Canciones() {
  return (
    <section className="container-md">
        <h2 className="fs-4">Canciones en tendencia</h2>
        <div className="d-flex overflow-auto gap-3 pb-2 scroll-x-hide mt-4" style={{ scrollSnapType: "x mandatory" }}>
            {canciones.map((cancion, index) => (<Cancion key={index} cancion={cancion}/>))}
        </div>
    </section>
  )
}
