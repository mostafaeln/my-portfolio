import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
//import Layout from './components/Layout';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
       <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Skills' element={<Skills />} />
        </Routes>
    
    </Router>
  );
}

export default App;