import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-slate-800"
            >Nombre:</label>
            <input
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              type="text"
              name="name"
              placeholder="Tu Nombre"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-slate-800"
            >E-mail:</label>
            <input
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              type="text"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-slate-800"
            >Password:</label>
            <input
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password_confirmation"
              className="text-slate-800"
            >Repetir Password:</label>
            <input
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              type="password"
              name="password_confirmation"
              placeholder="Repetir Password"
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
          />
        </form>
      </div>
      <Link to="/auth/login" className="block text-center my-5 text-slate-500">
        ¿Ya tienes una cuenta? Inicia Sesión
      </Link>
    </>
  )
}
