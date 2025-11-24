import { useState } from "react";
import { CgMenu, CgClose   } from "react-icons/cg";
import { NavbarMenu } from "../molecules/navbarMenu";
import { LocationNavbar } from "../molecules/locationNavbar";
import { LoginNavbar } from "../molecules/login";

function Navbar({ setModalIsOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#06141F] border-b border-[#FFBB00] z-[100]">
      <div className="flex items-center justify-between px-6 md:px-5 h-16 md:h-20">
        
        {/* Logo Mobile - Solo visible en mobile (izquierda) */}
        <a href="/" className="md:hidden flex items-center gap-2">
          <img 
            src="/LOGO.png" 
            alt="Logo Brown Coffee" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-[#FFBB00] font-bold text-center text-sm whitespace-nowrap">
            BROUN COFFEE
          </span>
        </a>
        <div className="hidden md:block">
          <LocationNavbar />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <NavbarMenu onLinkClick={closeMenu} />
        </div>

        <div className="hidden md:block">
          <LoginNavbar setModalIsOpen={setModalIsOpen} />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-[#FFBB00] p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <CgClose size={28} /> : <CgMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile - Desplegable */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-[#06141F] border-t border-[#FFBB00]/30 px-6 py-4 space-y-4">
          {/* Location Mobile */}
          <div className="pb-4 border-b border-[#FFBB00]/20">
            <LocationNavbar />
          </div>

          {/* Menu Items Mobile */}
          <div className="pb-4 border-b border-[#FFBB00]/20">
            <NavbarMenu onLinkClick={closeMenu} />
          </div>

          {/* Login Mobile */}
          <div className="pt-2">
            <LoginNavbar setModalIsOpen={setModalIsOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };