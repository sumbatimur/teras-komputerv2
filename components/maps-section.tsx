'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function MapsSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block mb-2">Lokasi & Kontak</span>
            <span className="gradient-accent text-3xl md:text-4xl">Temui Kami di Kupang</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi toko kami atau hubungi tim profesional kami untuk konsultasi gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Sultan Hasanuddin No. 45<br />
                    Kelurahan Oebobo<br />
                    Kota Kupang, NTT 85111<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Telepon</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+62-380-823456" className="hover:text-primary transition-colors">
                      +62 380 823456
                    </a><br />
                    <a href="tel:+62-821-4567890" className="hover:text-primary transition-colors">
                      +62 821 4567890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@terascomputer.com" className="hover:text-primary transition-colors">
                      info@terascomputer.com
                    </a><br />
                    <a href="mailto:service@terascomputer.com" className="hover:text-primary transition-colors">
                      service@terascomputer.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">
                    Senin - Jumat: 08:00 - 18:00<br />
                    Sabtu: 08:00 - 17:00<br />
                    Minggu: 10:00 - 16:00<br />
                    <span className="text-primary font-semibold">Libur Nasional Tutup</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps Embed */}
          <div className="animate-slide-in-right">
            <div className="relative w-full h-96 rounded-xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.2546432423245!2d123.5968!3d-10.1681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c579d8d8d8d8d8d%3A0x8d8d8d8d8d8d8d8d!2sKupang%2C%20East%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="mt-6 bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Hubungi Kami Sekarang</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows={3}
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
                <button type="submit" className="w-full gradient-btn px-4 py-2 rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
