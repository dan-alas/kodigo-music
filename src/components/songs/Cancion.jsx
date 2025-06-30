
export default function Cancion({cancion}) {
  const { img, title, artist,url } = cancion;

  return (
    <div className="card bg-transparent text-white border-0 cancion">
        <a href={url} target='_blank'>
          <img src={img} className="card-img-top img-card" alt="Cancion"/>
        </a>
        
        <div className="card-body px-0">
            <h5 className="card-title fs-6 fs-md-5">{title}</h5>
            <p className="card-text">{artist}</p>
        </div>
        
    </div>
  )
}
