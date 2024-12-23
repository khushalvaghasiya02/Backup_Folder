import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Feature from './component/Feature';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Offer from './component/Offer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
 