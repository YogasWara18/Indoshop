import Category from './Categories/Category'
import Deals from './Deals/Deals'
import Hero from './Header/Hero'
import Banners from './Promotion-Banner/Banners'

export default function PageIndex() {
  return (
    <>
      <Hero/>
      <Category/>
      <Banners/>
      <Deals/>
    </>
  )
}
