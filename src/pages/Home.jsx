import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainSection from '../components/MainSection'

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-primary">
        <div className="vh-100 overflow-hidden">
          <div className="container h-100">
            <div className="row h-100 g-3">
              <Sidebar />
              <MainSection />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
