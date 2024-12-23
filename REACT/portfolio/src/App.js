
import './App.css';
import About from './component/About';
import Banner from './component/Banner';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
