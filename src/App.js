import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"
import About from "./Components/About/About";
import "./style.css"
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
