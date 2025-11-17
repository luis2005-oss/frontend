import { CircleUserRound } from "lucide-react"


function LoginNavbar() {
  return (
    <a href="#" className="flex flex-col items-center justify-center">
      <CircleUserRound className="text-[#FFBB00] size-8"  />
      <p className="text-[#ffff]">Iniciar Sesión</p>
    </a>
  )
}

export { LoginNavbar }