import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'; 
import { useState } from 'react';


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");
         

    const onSubmit = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            console.log("Usuario registrado:", user.email);

            setFirebaseError("");  
            reset();
            
            setTimeout(() => {
                navigate("/LoginForm");
            }, 2000);

        } catch (error) {
            console.error("Error al registrar usuario:", error.message);
            
            if(error.code === "auth/email-already-in-use"){
                setFirebaseError("Este correo ya está registrado.");

            } else {
                setFirebaseError("Error: " + error.message);
            }
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
                <h1 className="h4">Bienvenido a Kodigo Music. Regístrate para empezar a escuchar contenido</h1>
            </div>

            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="name" className="mb-1">Ingresa tu nombre</label>
                <input type="text" id="name" className="form-control mb-1" placeholder="Tu nombre"
                {...register("name", { required: "El nombre es obligatorio" })}
                />
                {errors.name && <span className="text-warning mb-2">{errors.name.message}</span>}

                <label htmlFor="email" className="mb-1">Dirección de correo electrónico</label>
                <input type="email" id="email" className="form-control mb-1" placeholder="nombre@dominio.com"
                    {...register("email", {required: "El correo es obligatorio",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: "El correo no es válido"
                    }
                    })}
                />
                {errors.email && <span className="text-warning mb-2">{errors.email.message}</span>}

                <label htmlFor="password" className="mb-1">Ingresa una contraseña</label>
                <input type="password" id="password" className="form-control mb-1" placeholder="Tu contraseña"
                    {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                        value: 6,
                        message: "La contraseña debe tener al menos 6 caracteres"
                    }
                    })}
                />
                {errors.password && <span className="text-warning mb-2">{errors.password.message}</span>}

                <button className="btn btn-success mt-3">Registrate ahora</button>
                {firebaseError && <p className="text-danger mt-3">{firebaseError}</p>}

                </form>

            <div className="d-flex gap-2 mt-3">
                <p>¿Ya tienes una cuenta?</p>
                <Link to="/LoginForm">Iniciar Sesion aquí</Link>
            </div>

        </div>
    </section>
  )
}
