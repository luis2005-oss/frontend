import { FaLocationDot } from "react-icons/fa6";



function LocationNavbar () {
  const location = 'Jr. José Galves 610 - Celendín'
    return(
        <a href="#" className="flex gap-1 items-end-safe justify-center">
          <FaLocationDot className="text-[#FFBB00]"/>
          <small className="text-[#FFBB00]">{location}</small>
        </a>
    )
}

export {LocationNavbar}