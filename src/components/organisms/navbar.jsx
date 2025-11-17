import { NavbarMenu } from "../molecules/navbarMenu";
import { LocationNavbar } from "../molecules/locationNavbar";
import { LoginNavbar } from "../molecules/login";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 bg-[#06141F] fixed w-screen h-18">
      <LocationNavbar/>
      <NavbarMenu/>
      <LoginNavbar/>
    </nav>
  )
}

export { Navbar }