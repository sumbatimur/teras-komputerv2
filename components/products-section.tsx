'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Zap, Package, Star } from 'lucide-react'

const laptops = [
  {
    id: 1,
    name: 'Lenovo ThinkPad E14',
    price: 'Rp 4.500.000',
    condition: 'Sangat Bagus',
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=500&h=500&fit=crop',
    specs: [
      'Processor: Intel Core i5-10210U',
      'RAM: 8GB DDR4',
      'Storage: 512GB SSD',
      'Display: 14" FHD',
      'Battery: Excellent',
    ],
    rating: 5,
  },
  {
    id: 2,
    name: 'ASUS VivoBook 15',
    price: 'Rp 3.800.000',
    condition: 'Baik',
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=500&h=500&fit=crop',
    specs: [
      'Processor: AMD Ryzen 5 3500U',
      'RAM: 8GB DDR4',
      'Storage: 256GB SSD',
      'Display: 15.6" FHD',
      'Battery: Good',
    ],
    rating: 5,
  },
  {
    id: 3,
    name: 'HP Pavilion 14',
    price: 'Rp 5.200.000',
    condition: 'Sangat Bagus',
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=500&h=500&fit=crop',
    specs: [
      'Processor: Intel Core i7-1065G7',
      'RAM: 16GB DDR4',
      'Storage: 512GB SSD',
      'Display: 14" FHD',
      'Battery: Excellent',
    ],
    rating: 5,
  },
  {
    id: 4,
    name: 'Dell Inspiron 15',
    price: 'Rp 4.200.000',
    condition: 'Baik',
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3bde08c?w=500&h=500&fit=crop',
    specs: [
      'Processor: Intel Core i5-1135G7',
      'RAM: 8GB DDR4',
      'Storage: 512GB SSD',
      'Display: 15.6" FHD',
      'Battery: Good',
    ],
    rating: 5,
  },
]

interface SelectedLaptop {
  id: number
  name: string
  price: string
  condition: string
  image: string
  specs: string[]
  rating: number
}

export function ProductsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLaptop, setSelectedLaptop] = useState<SelectedLaptop | null>(null)
  const [filteredLaptops] = useState(laptops)

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block mb-2">Laptop Bekas Berkualitas</span>
            <span className="gradient-accent text-3xl md:text-4xl">Pilihan Terbaik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Laptop bekas dengan kualitas terjamin, teruji, dan siap pakai. Garansi kepuasan pelanggan 100%.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in-up">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Cari laptop..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLaptops.map((laptop, index) => (
            <div
              key={laptop.id}
              className="group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedLaptop(laptop)}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={laptop.image}
                    alt={laptop.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    {laptop.condition}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {laptop.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: laptop.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Specs Preview */}
                  <ul className="text-xs text-muted-foreground mb-4 space-y-1 flex-1">
                    {laptop.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Zap size={12} className="text-accent" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <p className="text-lg font-bold gradient-accent mb-3">
                    {laptop.price}
                  </p>

                  {/* Button */}
                  <button className="w-full gradient-btn px-4 py-2 rounded-lg text-sm font-semibold text-primary-foreground hover:shadow-lg transition-all">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLaptop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLaptop(null)}
                className="float-right text-muted-foreground hover:text-primary transition-colors"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {/* Image */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={selectedLaptop.image}
                    alt={selectedLaptop.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedLaptop.name}</h2>

                  {/* Condition Badge */}
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {selectedLaptop.condition}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: selectedLaptop.rating }).map((_, i) => (
                        <Star key={i} size={18} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({selectedLaptop.rating}.0)</span>
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold gradient-accent mb-6">{selectedLaptop.price}</p>

                  {/* Specs */}
                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Spesifikasi Lengkap:</h3>
                    <ul className="space-y-3">
                      {selectedLaptop.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <Package size={18} className="text-primary flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 gradient-btn px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all">
                      Pesan Sekarang
                    </button>
                    <button onClick={() => setSelectedLaptop(null)} className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
