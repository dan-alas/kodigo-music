import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import { auth } from '../firebase/config'; // Ajusta la ruta según tu proyecto
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorLogin, setErrorLogin] = useState(""); // para almacenar el error
  const [mensajeBienvenida, setMensajeBienvenida] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log("Usuario autenticado:", user.email);

      setMensajeBienvenida(`¡Bienvenido ${user.email}!`);  // muestra mensaje

      setTimeout(() => {
        setMensajeBienvenida("");   // limpia mensaje
        navigate("/");              // redirige
      }, 3000); // 3 segundos

    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setErrorLogin("Correo o contraseña incorrecta"); // guarda mensaje para mostrar
    }
};

  return (
    <section className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-white p-4 rounded w-100" style={{maxWidth: "500px"}}>
            <figure className="text-center mb-4">
                <Link to="/">
                   <img src="https://res.cloudinary.com/drztldzvn/image/upload/v1750637194/images_udc17a.png" alt="Logo" className="img-fluid" style={{maxWidth: "150px"}} />
                </Link>
            </figure>

            <div className="text-center mb-4">
                <h1 className="h4">Iniciar Sesión</h1>
            </div>

            <form className="d-flex flex-column"  onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email" className="mb-1">Dirección de correo electrónico</label>
                <input type="email" id="email" className="form-control mb-1" placeholder="nombre@dominio.com"
                  {...register("email", { required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "El correo no es válido"
                    }
                  })}/>

                {errors.email && <span className="text-warning mb-2">{errors.email.message}</span> }

                <label htmlFor="password" className="mb-1">Ingresa tu contraseña</label>
                <input type="password" id="passwordSesion" className="form-control mb-3" placeholder="Tu contraseña"  {...register("password", { required: "La contraseña es obligatoria" })}/>
                {errors.password && <span className="text-warning mb-2"> {errors.password.message} </span>}

                <button className="btn btn-success">Iniciar Sesión</button>
                {errorLogin && (<p className="text-danger mt-3">{errorLogin}</p>)}
                {mensajeBienvenida && (<p className="text-success mt-3">{mensajeBienvenida}</p>)}

            </form>

            <div className="d-flex gap-2 mt-3">
                <p>¿No tienes una cuenta?</p>
                <Link to="/RegisterForm">Registrate aquí</Link>
            </div>
        </div>
        
    </section>
  )
}
