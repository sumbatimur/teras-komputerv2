'use client'

import { Laptop, Printer, Monitor, Wrench, Battery, HardDrive } from 'lucide-react'

const services = [
  {
    icon: Laptop,
    title: 'Service Laptop',
    description: 'Perbaikan laptop dari masalah hardware hingga software dengan teknisi bersertifikat.',
    color: 'from-primary to-accent',
  },
  {
    icon: Monitor,
    title: 'Service Desktop',
    description: 'Servis computer desktop, upgrade hardware, dan instalasi sistem operasi profesional.',
    color: 'from-accent to-primary',
  },
  {
    icon: Printer,
    title: 'Printer & Scanner',
    description: 'Perbaikan dan maintenance printer, scanner, dan perangkat sejenis lainnya.',
    color: 'from-primary to-accent',
  },
  {
    icon: Monitor,
    title: 'Monitor & LCD',
    description: 'Servis layar monitor, LCD, dan display dengan hasil kualitas terbaik.',
    color: 'from-accent to-primary',
  },
  {
    icon: Battery,
    title: 'Jual Laptop Bekas',
    description: 'Laptop bekas berkualitas dengan harga kompetitif dan garansi kepuasan pelanggan.',
    color: 'from-primary to-accent',
  },
  {
    icon: Wrench,
    title: 'Elektronik Lainnya',
    description: 'Servis berbagai perangkat elektronik dan aksesori komputer lainnya.',
    color: 'from-accent to-primary',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block mb-2">Layanan Kami</span>
            <span className="gradient-accent text-3xl md:text-4xl">Lengkap & Terpercaya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan service komputer, elektronik, dan penjualan perangkat berkualitas untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:-translate-y-1">
                  {/* Icon Background */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-4 group-hover:shadow-lg transition-all`}>
                    <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                      <Icon className="text-primary group-hover:text-accent transition-colors" size={32} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-b-xl" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
            Hubungi Tim Kami
          </button>
        </div>
      </div>
    </section>
  )
}
