import Album from './Album'
import { albums } from '../../data/albums-db'

export default function Albums() {
  return (
    <section className="container-md px-0 px-md-3">
        <h2 className="fs-4">Álbumes</h2>
        <div className="d-flex gap-3 pb-2 scroll-x-hide mt-4" style={{overflowX: "auto"}}>
            {albums.map((album, index) => (<Album key={index} album={album}/>))}
        </div>

    </section>

  )
}
