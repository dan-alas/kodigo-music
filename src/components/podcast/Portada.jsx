
export default function PortadaPodcast({podcast}) {
  const { img, name, speaker } = podcast;
  
  return (
   <div className="card bg-light text-white border-0" style={{minWidth: "200px", scrollSnapAlign: "start"}}>
        <img src={img} className="card-img-top" height="190" alt={name}/>
        <div className="card-body">
            <h5 className="card-title fs-5">{name}</h5>
            <p className="card-text">{speaker}</p>
        </div>
    </div>
  )
}
