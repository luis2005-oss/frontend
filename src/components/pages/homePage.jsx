import { HomeBanner } from "../organisms/homeBanner"
import { Tendencies } from "../organisms/homeTendencies"
import { VenefitionsCoffee } from "../organisms/homeVenefitionsCoffee"
import { MyTemplate } from "../templates/myTemplate"

function HomePage() {
  return (
    <MyTemplate>
      <HomeBanner/>
      <VenefitionsCoffee/>
      <Tendencies/>
    </MyTemplate> 
  )
}

export { HomePage }