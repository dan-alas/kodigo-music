import Header from '../components/Header'
import PodcastSection from '../components/PodcastSection'

export default function Podcast() {
  return (
    <>
    <Header/>
    <section className="bg-primary">
            <div className="vh-100 overflow-hidden">
              <div className="container h-100">
                <div className="row h-100 g-3">
                  <PodcastSection/>
                </div>
              </div>
            </div>
     </section>
     </>
  )
}
