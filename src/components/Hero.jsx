export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_80%_0,rgba(0,0,0,0.06),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs text-neutral-600 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Biji kopi pilihan. Diseduh dengan presisi.
            </span>
            <h1 className="mt-6 text-5xl/tight sm:text-6xl/tight font-semibold tracking-tight text-neutral-900">
              Caffora
              <span className="block text-neutral-500">Coffee crafted for the modern soul</span>
            </h1>
            <p className="mt-6 text-neutral-600 max-w-xl">
              Nikmati pengalaman kopi premium dengan suasana minimalis dan elegan. Tempat ideal untuk bekerja, bertemu, atau sekadar menikmati seduhan terbaik.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#menu" className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800 transition-colors">Lihat Menu</a>
              <a href="#contact" className="inline-flex items-center rounded-full px-5 py-2.5 border border-neutral-300 hover:bg-neutral-50 transition-colors">Reservasi</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600">
              <div>
                <div className="text-2xl font-semibold text-neutral-900">4.9</div>
                <div>Rating pelanggan</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-neutral-900">50+</div>
                <div>Varian minuman</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-neutral-900">7am–10pm</div>
                <div>Jam operasional</div>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200">
            <div className="absolute -inset-10 -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,#0000000f,_#00000000_25%)] blur-2xl" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-64 h-64 rounded-full bg-neutral-900 shadow-2xl shadow-neutral-900/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
