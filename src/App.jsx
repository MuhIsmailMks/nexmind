// Global Styles
import "./App.css";

// Common Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Starter } from "./components/common/CardComponents";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Interface from "./components/sections/Interface";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Faq from "./components/sections/Faq";
import Price from "./components/sections/Price"; 

function App() { 
  return (
    <main className="font-sans relative flex-center flex-col bg-page text-colortext gap-20 md:gap-[180px] min-[1800px]:gap-[220px]">
      <Navbar />
 
      <Hero/>

      <About />

      <Interface />

      <Features />
      
      <Testimonials />

      <Faq />
 
      <Starter />

      <Price />

      <Footer />

      <div className="absolute bottom-[100px] right-[5%] bg-blur-round"></div>
    </main>
  );
}

export default App;
