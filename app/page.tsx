import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ProductsSection } from '@/components/products-section'
import { MapsSection } from '@/components/maps-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProductsSection />
      <MapsSection />
      <Footer />
    </main>
  )
}
