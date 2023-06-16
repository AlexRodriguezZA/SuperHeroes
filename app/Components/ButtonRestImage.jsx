
const ButtonRestImage = ({rest, CantidadInputImagenes}) => {
    return (
        CantidadInputImagenes === 1 ? <button className="text-black bg-gray-300 px-3 py-1 rounded text-sm"> - </button>
        : <button className="text-black bg-gray-300 px-3 py-1 rounded text-sm" onClick={rest}> - </button>

    )
  }
  
  export default ButtonRestImage