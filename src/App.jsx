import About from "./components/About";
import Navbar from "./components/Navbar"
import SmoothScroll from "smooth-scroll";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <OurServices />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App