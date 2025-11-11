import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Reservasi & Kontak</h2>
            <p className="mt-4 text-neutral-600">Ingin memesan tempat atau tanya informasi? Tinggalkan pesan Anda, tim kami akan menghubungi segera.</p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-neutral-500">Lokasi</div>
                <div className="font-medium text-neutral-900">Jl. Senja No. 12, Jakarta</div>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-neutral-500">Jam Buka</div>
                <div className="font-medium text-neutral-900">Senin–Minggu 07.00–22.00</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 p-6 bg-white/60 backdrop-blur">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-2xl font-semibold text-neutral-900">Terima kasih!</div>
                <p className="text-neutral-600">Pesan Anda sudah kami terima.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-neutral-600">Nama</label>
                  <input required className="h-11 rounded-xl border border-neutral-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-300" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-neutral-600">Email</label>
                  <input required type="email" className="h-11 rounded-xl border border-neutral-300 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-300" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-neutral-600">Pesan</label>
                  <textarea required rows="4" className="rounded-xl border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-300" />
                </div>
                <button className="inline-flex items-center justify-center h-11 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Kirim</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
