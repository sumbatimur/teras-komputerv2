'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    title: 'Pengusaha',
    content: 'Layanan Teras Computer sangat profesional dan cepat. Laptop saya yang bermasalah langsung diperbaiki dengan baik. Sangat puas dengan hasil kerjanya!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Siti Nurhaliza',
    title: 'Freelancer',
    content: 'Tim teknisi mereka sangat ramah dan sabar. Mereka menjelaskan masalah dengan baik dan solusinya terjangkau. Sudah beberapa kali saya gunakan layanannya.',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    name: 'Ahmad Wijaya',
    title: 'Pemilik Warnet',
    content: 'Untuk maintenance rutin komputer warnet saya, Teras Computer adalah pilihan terbaik. Response cepat dan hasil memuaskan. Highly recommended!',
    rating: 5,
    avatar: '👨‍🔧',
  },
  {
    name: 'Eka Putri',
    title: 'Pegawai Kantor',
    content: 'Membeli laptop bekas dari mereka dan kondisinya sangat bagus. Semua fungsi berjalan normal dan harganya jauh lebih terjangkau. Terima kasih!',
    rating: 5,
    avatar: '👩‍💼',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block mb-2">Testimoni Pelanggan</span>
            <span className="gradient-accent text-3xl md:text-4xl">Yang Puas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ribuan pelanggan telah mempercayai kami untuk kebutuhan service mereka. Berikut adalah beberapa testimoni mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-b" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-border/50">
          <div className="text-center animate-fade-in-up">
            <p className="text-3xl md:text-4xl font-bold gradient-accent mb-2">500+</p>
            <p className="text-muted-foreground">Pelanggan Puas</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <p className="text-3xl md:text-4xl font-bold gradient-accent mb-2">4.9★</p>
            <p className="text-muted-foreground">Rating Rata-rata</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-3xl md:text-4xl font-bold gradient-accent mb-2">5+</p>
            <p className="text-muted-foreground">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>
  )
}
