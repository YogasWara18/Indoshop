import Banner from './Banner/Banner'
import Benefits from './Benefits/Benefits'
import BestSales from './BestSales/BestSales'
import Brands from './Brands/Brands'
import Category from './Categories/Category'
import Deals from './Deals/Deals'
import Hero from './Header/Hero'
import HotDeals from './Hot-Deals/HotDeals'
import Newsletter from './Newsletter/Newsletter'
import Offers from './Offers-Banner/Offers'
import Banners from './Banners/Banners'
import Recommend from './Recommend/Recommend'
import TopProduct from './Top-Product/TopProduct'
import Vendors from './Vendors/Vendors'

export default function PageIndex() {
  return (
    <>
      <Hero/>
      <Category/>
      <Banners/>
      <Deals/>
      <Offers/>
      <Recommend/>
      <HotDeals/>
      <Vendors/>
       <Benefits/>
      <BestSales/>
      <Banner/>
      <TopProduct/>
      <Brands/>
     
      <Newsletter/>
    </>
  )
}
