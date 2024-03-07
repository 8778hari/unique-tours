import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery'
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Package } from './pages/Package';
import { Service } from './pages/Service';

function App() {
  return (
    <div className="App">
      <div className='main_container'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/services" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
