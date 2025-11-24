import { Route, Routes } from "react-router-dom"
import { MyTemplate } from "./components/templates/myTemplate"
import { HomePage } from "./components/pages/homePage"
import { LetterPage } from "./components/pages/letterPage"
import { AbouUsPage } from "./components/pages/aboutUsPage"
import { BookingPage } from "./components/pages/bookingPage"
import { ContactPage } from "./components/pages/contactPage"
import { Navbar } from "./components/organisms/navbar"
import { useState } from "react"
import { ModalLogin } from "./components/organisms/modalLogin"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const pages = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/letter',
      component: LetterPage
    },
    {
      path: '/aboutus',
      component: AbouUsPage
    },
    {
      path: '/bookings',
      component: BookingPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
  ]

  return (
    <>
      <Navbar setModalIsOpen={setModalIsOpen}/>
      <MyTemplate>
      {modalIsOpen ? <ModalLogin setModalIsOpen={setModalIsOpen} /> : ''}
        <Routes>
          {
            pages.map((page) => {
              return (
                <Route
                  path={page.path}
                  Component={page.component}
                />
              )
            })
          }
        </Routes>
      </MyTemplate>
      
    </>
  )
}

export default App
