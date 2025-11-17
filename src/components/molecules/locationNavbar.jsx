import { MapPin } from "lucide-react"


function LocationNavbar () {
  const location = 'Jr. José Galves 610 - Celendín'
    return(
        <a href="#" className="flex gap-1 items-end-safe justify-center">
          <MapPin className="text-[#FFBB00]"/>
          <small className="text-[#FFBB00]">{location}</small>
        </a>
    )
}

export {LocationNavbar}