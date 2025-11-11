const items = [
  { name: 'Espresso', desc: 'Single shot, bold and rich', price: '25K' },
  { name: 'Americano', desc: 'Espresso with hot water', price: '28K' },
  { name: 'Cappuccino', desc: 'Milk foam, smooth and creamy', price: '35K' },
  { name: 'Latte', desc: 'Silky milk with espresso', price: '35K' },
  { name: 'Mocha', desc: 'Chocolate infused latte', price: '38K' },
  { name: 'Manual Brew', desc: 'V60 / Kalita / Aeropress', price: '32K' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Menu Unggulan</h2>
            <p className="mt-2 text-neutral-600">Pilihan racikan terbaik kami, disajikan setiap hari.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full px-5 py-2.5 border border-neutral-300 hover:bg-neutral-50 transition-colors">Pesan Sekarang</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.name} className="group rounded-2xl border border-neutral-200 p-6 bg-white/60 backdrop-blur hover:shadow-lg hover:border-neutral-300 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-neutral-900">{i.name}</h3>
                <span className="text-sm rounded-full bg-neutral-900 text-white px-3 py-1">{i.price}</span>
              </div>
              <p className="mt-2 text-neutral-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
