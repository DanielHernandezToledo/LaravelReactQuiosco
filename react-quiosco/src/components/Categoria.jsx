import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {

  const { handleClickCategoria, categoriaActual } = useQuiosco()
  const { nombre, icono, id } = categoria

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      <img
        src={`/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        className="w-12"
      />
      <button
        className="text-lg font-bold truncate cursor-pointer"
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}
