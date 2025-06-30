import { podcast } from "../../data/podcast-db";
import PortadaPodcast from "./Portada";

export default function Podcasts() {
    
  return (
    <section className="container">
      <h2 className="fs-4">Podcast</h2>
      <div className="d-flex gap-3 pb-2 scroll-x-hide mt-4" style={{overflowX: "auto"}}>
          {podcast.map((podcast, index) => (<PortadaPodcast key={index} podcast={podcast}/>))}
      </div>
    </section>
  )
}
