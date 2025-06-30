import SidebarCard from './sidebar/SidebarCard'
import { sidebarCards } from '../data/card-db' 



export default function Sidebar() {

  return (

    <aside className="col-md-3 d-none d-xl-block" style={{ height: "100vh" }}>
        <div className="bg-light d-flex flex-column p-3 rounded h-100">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-light mb-0">Tu Biblioteca</h5>
                    <button className="btn"> <i className="bi bi-plus text-light fs-4"></i> </button>
                </div>

                {sidebarCards.map((card, index) => (<SidebarCard key={index} card={card} />))}
                
            </div>
        </div>
    </aside>
  )
}
