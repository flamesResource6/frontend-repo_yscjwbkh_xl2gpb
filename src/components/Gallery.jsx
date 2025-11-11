export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Galeri</h2>
            <p className="mt-2 text-neutral-600">Suasana, detail, dan momen favorit di Caffora.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="aspect-[4/5] rounded-2xl bg-neutral-100" />
          <div className="aspect-square rounded-2xl bg-neutral-100" />
          <div className="aspect-[3/4] rounded-2xl bg-neutral-100" />
          <div className="aspect-square rounded-2xl bg-neutral-100" />
          <div className="aspect-[4/5] rounded-2xl bg-neutral-100" />
          <div className="aspect-[3/4] rounded-2xl bg-neutral-100" />
        </div>
      </div>
    </section>
  )
}
