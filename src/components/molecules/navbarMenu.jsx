import { NavbarLink } from "../atoms/navbarLink";

function NavbarMenu() {

  const menu1 = [
    {
      text: 'Carta',
      href: '/letter'
    },
    {
      text: 'Nosotros',
      href: '/aboutus'
    },
  ]

  const menu2 = [
    {
      text: 'Reservas',
      href: '/bookings'
    },
    {
      text: 'Contacto',
      href: '/contact'
    },
  ]

  return (
    <ul className="flex items-center gap-26 text-[#FFBB00] relative">
      {
        menu1.map((index, item) => {
          return (
            <li key={item} className="">
              <NavbarLink
                href={index.href}
                text={index.text}
              />
            </li>
          )
        })
      }
      <a href="/" className="flex flex-col items-center justify-center mt-8 bg-[#06141F] px-10 pb-1 rounded-3xl">
        <img src="/LOGO.png" alt="Logo de la empresa" className="w-20" />
        <h1 className="text-[#FFBB00] font-bold">BROUN COFFEE</h1>
      </a>
      {
        menu2.map((wy, jh) => {
          return (
            <li key={jh} className="">
              <NavbarLink
                href={wy.href}
                text={wy.text}
              />
            </li>
          )
        })
      }


    </ul>
  )
}

export { NavbarMenu }