
import './App.css';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ServiceSection from './components/ServicesSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutMe />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
