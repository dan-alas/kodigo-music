import Canciones from './songs/Canciones'
import Artistas from './artist/Artistas'
import Albums from './albums/Albums'

export default function MainSection() {
  return (
    <section className="col-xl-9 rounded overflow-auto scroll-y-hide" style={{height: "100vh"}}>
        <div className="bg-light-app text-white flex-grow-1 overflow-auto scroll-y-hide p-md-3">
          <Canciones/>
          <Artistas/>
          <Albums/>
        </div>
    </section>
  )
}
