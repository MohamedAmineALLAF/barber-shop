import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

