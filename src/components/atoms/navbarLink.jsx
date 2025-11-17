import { Link } from "react-router-dom";

function NavbarLink({href, text, onClick}) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className='decoration-0'
    >
      {text}
    </Link>
    )
}

export { NavbarLink }