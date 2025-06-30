import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ajusta la ruta

export default function Header() {
  const { usuario, logout } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand me-3" to="/">
            <img className="img-fluid" width="50" src="https://res.cloudinary.com/drztldzvn/image/upload/v1750637194/images_udc17a.png" alt=""/>
          </Link>

          {!usuario ? ( //Para modificar header si esta logueado o no
                <>
                  <p className='d-xl-none text-white'>Inicia Sesión</p>
                </> ) : (
                <p className="d-xl-none text-white">Sesion Iniciada</p>
              )}

          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Icono de Home*/}
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-light me-3" aria-current="page" to="/">
                  <i className="bi bi-house-door fs-4"></i>
                </Link>
              </li>
            </ul>

            {/* Buscador */}
            <form className="d-flex " role="search">
              <div className="input-group">
                <span className="input-group-text bg-light text-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>

                <input type="search" className="form-control border-start-0 bg-light text-white" placeholder="¿Qué quieres reproducir?" aria-label="Search"/>
              </div>
            </form>

            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-xl-center gap-2">

              <li className="nav-item"><Link className="nav-link text-light mt-4 mt-xl-auto" to="/Podcast">Podcast</Link></li>
              <li className="nav-item"><a className="nav-link text-light" href="https://kodigo.org/" target='_blank'>Kodigo</a></li>

              {!usuario ? ( //Para modificar header si esta logueado o no
                <>
                  <li className="nav-item">
                    <Link className="btn text-light border" to="/RegisterForm">Registrate</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="btn bg-white px-3" to="/LoginForm">Iniciar Sesion</Link>
                  </li>
                </> ) : (
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-danger px-3">
                    Cerrar Sesión
                  </button>
                </li>
              )}

            </ul>

          </div>

        </div>
      </nav>
    </header>
  );
}
