import { GiCoffeeBeans, GiCoffeeCup, GiCoffeePot, GiCoffeeMug } from "react-icons/gi";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";
import {VenefitionsOne } from "../molecules/homeVenefyOne";
import { VenefitionsTwo } from "../molecules/homeVenefyTwo";

function VenefitionsCoffee() {
  const verifyOne = [
    {
      icon: <GiCoffeeBeans className="text-2xl sm:text-3xl lg:text-4xl hover:transform rotate-2" />,
      title: 'Más Energía',
      paragraph: 'La cafeína te mantiene despierto, enfocado y activo todo el día.'
    },
    {
      icon: <SiCoffeescript className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Mejor Enfoque',
      paragraph: 'Ayuda a mejorar la concentración, la memoria y la claridad mental.'
    },
    {
      icon: <GiCoffeeCup className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Antioxidantes Naturales',
      paragraph: 'Protege las células y retrasa el envejecimiento gracias a sus antioxidantes.'
    },
  ]
  
  const verifyTwo = [
    {
      icon: <GiCoffeePot className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Buen Ánimo',
      paragraph: 'El café libera hormonas que mejoran el humor y reducen el estrés.'
    },
    {
      icon: <GiCoffeeMug className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Metabolismo Activo',
      paragraph: 'Acelera la quema de calorías y potencia el rendimiento físico.'
    },
    {
      icon: <SiBuymeacoffee className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Momentos Únicos',
      paragraph: 'El café crea experiencias: conversaciones, reuniones y buenos recuerdos.'
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center gap-5 py-10 px-20">
      <div className="flex items-center justify-between px-4 py-2 w-[40em] max-w-full bg-black text-white shadow-[0_8px_30px_black]">
        <h3 className="text-2xl lg:text-[1.2em]">Todo lo bueno empieza con un café</h3>
        <h3 className="text-2xl">cafévital</h3>
      </div>
      <div className="flex flex-col min-[600px]:flex-row gap-10 p-10 items-center justify-center">
        <VenefitionsOne verifyOne={verifyOne}/>
        <div className="flex items-center justify-center">
          <img 
            src="/VENEFITIONS.png" 
            alt="Vaso de cafe" 
            className="w-64 sm:w-80 lg:w-96 xl:w-[400px] min-[700px]:mt-[-3em] transition-transform duration-500 hover:scale-110"
          />
        </div>
        <VenefitionsTwo verifyTwo={verifyTwo}/>
      </div>
    </section>
  )   
}

export { VenefitionsCoffee }