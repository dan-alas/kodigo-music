
export default function Artista({artista}) {
    const { img, name, description, url } = artista;

  return (
    <div style={{ minWidth: "150px" }}>
      <a href={url} target='_blank'>
        <img src={img} className="rounded-circle artist-img" alt={name}/>
      </a>
      <h5 className="fs-6 fs-md-5 mt-2 text-center">{name}</h5>
      <p>{description}</p>
    </div>

  )
}
