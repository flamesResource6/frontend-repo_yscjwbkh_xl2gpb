import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Contact />
        <footer className="border-t border-neutral-200 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Caffora. All rights reserved.</div>
            <div className="text-sm text-neutral-600">Crafted with love and precision.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
