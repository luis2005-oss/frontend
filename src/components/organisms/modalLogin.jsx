import { useState } from "react"

function ModalLogin({ setModalIsOpen }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalIsOpen(false) // ✅ CORREGIDO
    }, 400)
  }

  // Cerrar modal al hacer clic fuera
  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Evitar cerrar al hacer clic en el modal
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-400 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleBgClick}
      >
        <form 
          onClick={handleModalClick}
          className={`
            absolute top-20 right-6 w-80 
            bg-[#f6f6f6] rounded-lg shadow-2xl 
            flex flex-col gap-5 p-6 z-999
            transition-all duration-400
            ${isClosing ? 'opacity-0 translate-y-20px' : 'opacity-100 translate-y-0'}
          `}
        >
          <h2 className="text-center font-bold text-3xl text-gray-800">
            Login
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Usuario
            </label>
            <input 
              className="
                bg-gray-200 rounded-lg h-10 px-3
                border border-transparent
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                outline-none transition-all duration-200
              "
              type="text"
              placeholder="user"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Contraseña
            </label>
            <input 
              className="
                bg-gray-200 rounded-lg h-10 px-3
                border border-transparent
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                outline-none transition-all duration-200
              "
              type="password"
              placeholder="Password"
            />
          </div>
          <button 
            type="button"
            className="
              mt-3 py-2.5 rounded-lg font-semibold
              bg-gradient-to-r from-amber-400 to-amber-500
              hover:from-amber-500 hover:to-amber-600
              active:scale-95
              transition-all duration-300
              shadow-md hover:shadow-lg
            "
            onClick={handleClose}
          >
            Enviar
          </button>

          <div className="
            mt-4 pt-4 border-t border-gray-200
            flex items-center justify-between 
            text-xs text-blue-600
          ">
            <a 
              href="#" 
              className="hover:text-blue-800 hover:underline transition-colors"
            >
              Olvidé mi Contraseña
            </a>
            <a 
              href="#" 
              className="hover:text-blue-800 hover:underline transition-colors"
            >
              No tengo cuenta 
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export { ModalLogin }