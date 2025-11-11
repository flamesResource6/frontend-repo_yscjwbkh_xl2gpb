export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-neutral-100 aspect-[4/3]" />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Tentang Caffora</h2>
            <p className="mt-4 text-neutral-600">
              Terinspirasi oleh seni, musik, dan ritme kota, Caffora menghadirkan pengalaman kopi modern dengan pendekatan minimalis. Kami percaya detail sederhana dapat menciptakan kemewahan yang sesungguhnya.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-2xl font-semibold text-neutral-900">2018</div>
                <div className="text-neutral-600">Sejak</div>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-2xl font-semibold text-neutral-900">3</div>
                <div className="text-neutral-600">Cabang</div>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-2xl font-semibold text-neutral-900">100%</div>
                <div className="text-neutral-600">Arabica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
