import { Link } from "react-router-dom"

function Tendencies() {
  const menuTendencies = [
    {
      text: 'Cafés',
      href : '/tendencies/coffee'
    },
    {
      text: 'Galletas',
      href : '/tendencies/cokies'
    },
    {
      text: 'Postres',
      href : '/tendencies/cakes'
    },
  ]
  return (
    <section className="h-screen">
      <div>
        <h2>Vuestras tendencias</h2>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          {
            menuTendencies.map((item, i)=>{
              return(
                <li key={i}>
                  <Link 
                    to={item.href}
                    className=''
                  > 
                  {item.text}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export { Tendencies }