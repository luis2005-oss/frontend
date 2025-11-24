function BannerButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 md:gap-6 lg:gap-16 w-full sm:w-auto">
          <a
            href="/letter"
            className="px-6 sm:px-8 md:px-10 py-3 md:py-3.5 bg-linear-to-br from-white 
              to-[#725800] text-black font-semibold rounded-lg hover:from-[#725800]
              hover:to-white transition-all duration-300 hover:-translate-y-[3px] text-center 
              shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
          >
            Ver Carta
          </a>

          <a
            href="/bookings"
            className="px-6 sm:px-8 md:px-10 py-3 md:py-3.5 bg-linear-to-br from-white 
              to-[#725800] text-black font-semibold rounded-lg hover:from-[#725800]
              hover:to-white transition-all duration-300 hover:-translate-y-[3px] text-center 
              shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
          >
            Reservar
          </a>
        </div>
    )
}

export { BannerButtons }