function VenefitionsOne({verifyOne}) {
  return (
    <div className="flex flex-col gap-16 min-[600px]:gap-20 lg:gap-24 min-[600px]:mt-12 lg:mt-16 items-center min-[600px]:items-start">
          {verifyOne.map((item, i) => (
            <article key={i} className="flex items-center justify-start gap-3 max-w-md">
              <span className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 rounded-full bg-black text-[#FFBB00] flex items-center justify-center group cursor-pointer hover:bg-cyan-950">
                <span className="transition-transform duration-300 group-hover:rotate-30">
                  {item.icon}
                </span>
              </span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-1">{item.title}</h4>
                <p className="text-xs sm:text-sm lg:text-sm text-gray-600">{item.paragraph}</p>
              </div>
            </article>
          ))}
    </div>
    )
}

export { VenefitionsOne }