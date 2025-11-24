import { FiShoppingCart } from "react-icons/fi";



function LoginNavbar({setModalIsOpen}) {
  const handlerSubmit = (e) =>{
    e.preventDefault()
    setModalIsOpen(true)
  }
  
  return (
    <div className="flex items-center gap-6 justify-center ">
      <button className="cursor-pointer"><FiShoppingCart  className="text-[#FFBB00] size-6"  /></button>
      <button className="text-[#ffff] cursor-pointer"
        onClick={handlerSubmit}
      >Iniciar Sesión</button>
    </div>
  )
}

export { LoginNavbar }