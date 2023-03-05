import Choose from "./Component/Choose";
import Footer from "./Component/Footer";
// import Coursel from "./Component/Coursel";
// import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import { Navbar } from "./Component/Navbar";
// import Price from "./Component/Price";
import Reasion from "./Component/Reasion";
import Services from "./Component/Services";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Choose />
      <Services />
      <Reasion/>
      <Testimonials/>
      {/* <Price /> */}
      <Footer/>
    </div>
  );
}

export default App;
