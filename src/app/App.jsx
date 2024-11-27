import ContactForm from "../components/ContactForm"
import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
