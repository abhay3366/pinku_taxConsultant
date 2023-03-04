import Choose from "./Component/Choose";
import Coursel from "./Component/Coursel";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import {Navbar} from "./Component/Navbar";
import Services from "./Component/Services";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Choose/>
      <Services/>
      <Coursel/>
      <Footer/>
    </div>
  );
}

export default App;
