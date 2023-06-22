import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider"
import Virtual from "./components/Virtual/Virtual";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/> 
     <Slider/>
     <Virtual/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
