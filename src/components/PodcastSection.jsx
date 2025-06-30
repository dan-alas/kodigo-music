import Podcasts from "./podcast/Podcasts"

export default function PodcastSection() {
  return (
    <section className="col-md-12 rounded overflow-auto scroll-y-hide p-0 p-md-auto" style={{height: "100vh"}}>
            <div className="bg-light-app text-white flex-grow-1 overflow-auto scroll-y-hide p-md-3">
                <Podcasts/>
            </div>
        </section>
  )
}
