'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Share2, Mail, Globe, Link as LinkIcon, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-teras-computer-6liYjqMo2ZtUogslRokrtBHoNXqiub.png"
                  alt="Teras Computer"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold gradient-accent">TERAS</h2>
                <p className="text-xs text-muted-foreground">Computer Group</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Layanan service komputer terpercaya di Kupang sejak 2019. Komitmen kami adalah memberikan solusi teknologi terbaik untuk Anda.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Service Laptop
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Service Desktop
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Service Printer
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Laptop Bekas
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tracking Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <LinkIcon size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Hubungi kami melalui media sosial untuk update terbaru dan penawaran khusus.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Teras Computer Group. Semua hak dilindungi. | Dikembangkan oleh{' '}
            <span className="text-primary font-semibold">One Click Sumba</span>
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
