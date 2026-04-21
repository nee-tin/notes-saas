

import NotesApp from "../components/NotesApp"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <Hero />
        <Features />
        <NotesApp />
      </main>

      <Footer />

    </div>
  )
}

export default Home;
