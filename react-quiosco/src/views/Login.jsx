import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Inicia sesión para realizar un pedido</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
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
          <input
            type="submit"
            value="Iniciar Sesion"
            className="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
          />
        </form>
      </div>
      <Link to="/auth/registro" className="block text-center my-5 text-slate-500">
        ¿No tienes una cuenta? Creala aquí
      </Link>
    </>
  )
}
