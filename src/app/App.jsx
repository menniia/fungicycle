import ContactForm from "../components/ContactForm"
import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <Features />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
