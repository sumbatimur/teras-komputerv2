'use client'

import Image from 'next/image'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest">Layanan Service Terpercaya</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Service Komputer
                <span className="gradient-accent block mt-2">Profesional di Kupang</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Percayakan kebutuhan teknis Anda kepada kami. Kami menyediakan layanan service komputer, elektronik, dan penjualan laptop bekas berkualitas dengan teknisi berpengalaman.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Cepat & Efisien</p>
                  <p className="text-xs text-muted-foreground">Penanganan profesional</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Terjamin</p>
                  <p className="text-xs text-muted-foreground">Hasil kerja maksimal</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="gradient-btn px-8 py-3 rounded-lg font-semibold text-primary-foreground flex items-center justify-center gap-2 group hover:shadow-lg">
                Konsultasi Gratis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/tracking" className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-colors flex items-center justify-center">
                Cek Status Service
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border-gradient">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/owner-kJsBoTiLHcK1SMSCIkHLhO5RwVUSI3.png"
                alt="Teknisi Profesional Teras Computer"
                width={500}
                height={600}
                className="object-cover w-full h-full object-top"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-primary rounded-xl p-4 shadow-lg animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-success font-bold">★</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Terpercaya</p>
                  <p className="text-xs text-muted-foreground">4.9/5 Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
