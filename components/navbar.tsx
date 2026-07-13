'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Layanan', href: '#services' },
    { label: 'Produk', href: '#products' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Tracking', href: '/tracking' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-card/90 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-teras-computer-6liYjqMo2ZtUogslRokrtBHoNXqiub.png"
                alt="Teras Computer"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold gradient-accent">TERAS</h1>
              <p className="text-xs text-muted-foreground">Computer Group</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button className="gradient-btn px-6 py-2 rounded-lg text-sm font-semibold text-primary-foreground">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="gradient-btn px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
