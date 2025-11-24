import { HomeBanner } from "../organisms/homeBanner"
import { VenefitionsCoffee } from "../organisms/homeVenefitionsCoffee"
import { MyTemplate } from "../templates/myTemplate"

function HomePage() {
  return (
    <MyTemplate>
      <HomeBanner/>
      <VenefitionsCoffee/>
    </MyTemplate> 
  )
}

export { HomePage }