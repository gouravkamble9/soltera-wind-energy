import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Performance from "./components/Performance";
import HowItWorks from "./components/HowItWorks";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Performance />
      <HowItWorks />
      <Clients />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
