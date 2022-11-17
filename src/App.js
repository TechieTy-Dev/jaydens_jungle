import "./App.css";
import {
  Cars,
  EMS,
  ImgSlider,
  Gaming,
  Speaking,
  Vlog,
  Causes,
  Hero,
  About,
  Navbar,
  Merch,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Causes />
      <ImgSlider />
      <EMS />
      <Speaking />
      <Gaming />
      <Cars />
      <Vlog />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;
