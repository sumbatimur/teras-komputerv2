'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Search, CheckCircle2, Clock, AlertCircle, Truck } from 'lucide-react'

interface TrackingData {
  id: string
  status: 'pending' | 'in_progress' | 'completed' | 'ready'
  device: string
  issue: string
  entryDate: string
  estimatedDate: string
  currentProgress: number
  timeline: {
    date: string
    status: string
    description: string
    completed: boolean
  }[]
}

const mockTrackingData: Record<string, TrackingData> = {
  '123456': {
    id: '123456',
    status: 'in_progress',
    device: 'Lenovo ThinkPad E14',
    issue: 'Overheating & Performa Lambat',
    entryDate: '2024-01-15',
    estimatedDate: '2024-01-22',
    currentProgress: 65,
    timeline: [
      {
        date: '2024-01-15',
        status: 'Diterima',
        description: 'Unit diterima dan dilakukan diagnostic awal',
        completed: true,
      },
      {
        date: '2024-01-16',
        status: 'Diagnosis',
        description: 'Ditemukan masalah pada fan dan thermal paste',
        completed: true,
      },
      {
        date: '2024-01-17',
        status: 'Perbaikan',
        description: 'Sedang dalam proses pembersihan dan penggantian thermal paste',
        completed: true,
      },
      {
        date: '2024-01-22',
        status: 'Selesai',
        description: 'Perbaikan selesai dan siap diambil',
        completed: false,
      },
    ],
  },
  '654321': {
    id: '654321',
    status: 'ready',
    device: 'ASUS VivoBook 15',
    issue: 'Baterai Tidak Charging',
    entryDate: '2024-01-10',
    estimatedDate: '2024-01-20',
    currentProgress: 100,
    timeline: [
      {
        date: '2024-01-10',
        status: 'Diterima',
        description: 'Unit diterima dan dilakukan diagnostic awal',
        completed: true,
      },
      {
        date: '2024-01-12',
        status: 'Diagnosis',
        description: 'Masalah ditemukan pada charging port',
        completed: true,
      },
      {
        date: '2024-01-15',
        status: 'Perbaikan',
        description: 'Charging port diganti dengan yang baru',
        completed: true,
      },
      {
        date: '2024-01-20',
        status: 'Selesai',
        description: 'Perbaikan selesai. SIAP DIAMBIL!',
        completed: true,
      },
    ],
  },
  '789012': {
    id: '789012',
    status: 'pending',
    device: 'HP Pavilion 14',
    issue: 'Hardisk Rusak',
    entryDate: '2024-01-20',
    estimatedDate: '2024-01-27',
    currentProgress: 10,
    timeline: [
      {
        date: '2024-01-20',
        status: 'Diterima',
        description: 'Unit baru saja diterima',
        completed: true,
      },
      {
        date: '2024-01-21',
        status: 'Diagnosis',
        description: 'Menunggu untuk diagnosis lengkap',
        completed: false,
      },
      {
        date: '2024-01-24',
        status: 'Perbaikan',
        description: 'Akan dimulai setelah diagnosis',
        completed: false,
      },
      {
        date: '2024-01-27',
        status: 'Selesai',
        description: 'Target selesai perbaikan',
        completed: false,
      },
    ],
  },
}

export default function TrackingPage() {
  const [trackingCode, setTrackingCode] = useState('')
  const [selectedTracking, setSelectedTracking] = useState<TrackingData | null>(null)
  const [searchAttempted, setSearchAttempted] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchAttempted(true)

    const code = trackingCode.trim().toUpperCase()
    if (code in mockTrackingData) {
      setSelectedTracking(mockTrackingData[code])
    } else {
      setSelectedTracking(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-warning bg-warning/10'
      case 'in_progress':
        return 'text-primary bg-primary/10'
      case 'completed':
        return 'text-success bg-success/10'
      case 'ready':
        return 'text-accent bg-accent/10'
      default:
        return 'text-muted-foreground bg-muted/10'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Menunggu Proses'
      case 'in_progress':
        return 'Sedang Diproses'
      case 'completed':
        return 'Selesai'
      case 'ready':
        return 'Siap Diambil'
      default:
        return 'Unknown'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-warning" size={24} />
      case 'in_progress':
        return <AlertCircle className="text-primary" size={24} />
      case 'completed':
        return <CheckCircle2 className="text-success" size={24} />
      case 'ready':
        return <Truck className="text-accent" size={24} />
      default:
        return null
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tracking <span className="gradient-accent">Pengerjaan Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Masukkan 6 digit kode nota untuk mengecek status service barang Anda
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-12 animate-fade-in-up">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Masukkan kode nota (6 digit)..."
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                maxLength={6}
                className="w-full pl-12 pr-4 py-4 bg-card border-2 border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-lg font-semibold"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 gradient-btn px-6 py-2 rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all"
              >
                Cari
              </button>
            </div>
          </form>

          {/* Results */}
          {searchAttempted && !selectedTracking && (
            <div className="mb-12 p-6 bg-warning/10 border border-warning rounded-lg text-center animate-fade-in-up">
              <AlertCircle className="inline-block mb-3 text-warning" size={32} />
              <p className="text-warning font-semibold">
                Kode nota tidak ditemukan. Silakan cek kembali atau hubungi kami.
              </p>
            </div>
          )}

          {selectedTracking && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Status Card */}
              <div className="bg-card border-2 border-border rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-secondary flex items-center justify-center">
                      {getStatusIcon(selectedTracking.status)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h2 className="text-3xl font-bold">{selectedTracking.device}</h2>
                      <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(selectedTracking.status)}`}>
                        {getStatusLabel(selectedTracking.status)}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">Masalah:</span> {selectedTracking.issue}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Kode Nota:</span> {selectedTracking.id}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold">Progress Perbaikan</span>
                    <span className="gradient-accent font-bold">{selectedTracking.currentProgress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                      style={{ width: `${selectedTracking.currentProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card border-2 border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8">Timeline Perbaikan</h3>

                <div className="space-y-6">
                  {selectedTracking.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      {/* Timeline Marker */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                            item.completed
                              ? 'bg-success border-success'
                              : 'border-muted bg-secondary'
                          }`}
                        >
                          {item.completed ? (
                            <span className="text-white font-bold">✓</span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          )}
                        </div>
                        {index < selectedTracking.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-20 ${
                              item.completed
                                ? 'bg-success'
                                : 'bg-muted'
                            }`}
                          />
                        )}
                      </div>

                      {/* Timeline Content */}
                      <div className="pt-1 pb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg">{item.status}</h4>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-1">Tanggal Masuk</p>
                  <p className="text-xl font-bold text-primary">{selectedTracking.entryDate}</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-1">Estimasi Selesai</p>
                  <p className="text-xl font-bold text-accent">{selectedTracking.estimatedDate}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedTracking(null)
                    setTrackingCode('')
                    setSearchAttempted(false)
                  }}
                  className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Cari Kode Lain
                </button>
                <button className="flex-1 gradient-btn px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all">
                  Hubungi Support
                </button>
              </div>

              {/* Contact Info */}
              {selectedTracking.status === 'ready' && (
                <div className="bg-accent/20 border-2 border-accent rounded-xl p-6">
                  <h4 className="font-bold text-lg text-accent mb-2">✓ Siap Diambil!</h4>
                  <p className="text-foreground mb-4">
                    Unit Anda sudah selesai diperbaiki dan siap untuk diambil. Silakan hubungi kami untuk mengatur waktu pengambilan.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold">Telepon:</span> +62 380 823456</p>
                    <p className="text-sm"><span className="font-semibold">Email:</span> service@terascomputer.com</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {!searchAttempted && !selectedTracking && (
            <div className="text-center py-12 animate-fade-in-up">
              <p className="text-muted-foreground text-lg">
                Gunakan contoh kode: <span className="font-mono font-bold text-primary">123456</span>, 
                <span className="font-mono font-bold text-primary ml-2">654321</span>, atau 
                <span className="font-mono font-bold text-primary ml-2">789012</span>
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
