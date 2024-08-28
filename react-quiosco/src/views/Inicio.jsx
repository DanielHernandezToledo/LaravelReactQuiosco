import { productos as data } from "../data/productos"
import Producto from "../components/Producto"
import useQuiosco from "../hooks/useQuiosco"

export default function inicio() {

  const {categoriaActual} = useQuiosco()
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <div>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="my-10 text-2xl">Elige y personaliza tu pedido a continuación</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
          <Producto
            key={producto.imagen}
            producto={producto}
          />
        ))}
      </div>
    </div>
  )
}
