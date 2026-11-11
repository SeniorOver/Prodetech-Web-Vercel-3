import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Categories from './components/Categories'
import Catalog from './components/Catalog'
import Applications from './components/Applications'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Parts from './components/Parts'
import Support from './components/Support'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <a
        href="#inicio"
        className="fixed left-4 top-3 z-[120] -translate-y-24 rounded-sm bg-flame px-4 py-2 text-[12px] font-semibold text-[#180a03] transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main>
        <Hero />
        <TechStrip />
        <Categories />
        <Catalog />
        <Applications />
        <WhyUs />
        <Process />
        <Parts />
        <Support />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
