import Podcasts from "./podcast/Podcasts"

export default function PodcastSection() {
  return (
    <section className="col-md-12 rounded overflow-auto scroll-y-hide" style={{height: "100vh"}}>
            <div className="bg-light text-white flex-grow-1 overflow-auto scroll-y-hide p-3">
                <Podcasts/>
            </div>
        </section>
  )
}
