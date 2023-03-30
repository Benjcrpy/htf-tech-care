import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Service from "./components/Service";
import Card from './components/Card'
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Service/>
      <Card/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
