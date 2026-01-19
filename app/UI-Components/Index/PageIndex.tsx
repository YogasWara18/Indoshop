import Category from './Categories/Category'
import Deals from './Deals/Deals'
import Hero from './Header/Hero'
import Offers from './Offers-Banner/Offers'
import Banners from './Promotion-Banner/Banners'
import Recommend from './Recommend/Recommend'

export default function PageIndex() {
  return (
    <>
      <Hero/>
      <Category/>
      <Banners/>
      <Deals/>
      <Offers/>
      <Recommend/>
    </>
  )
}
