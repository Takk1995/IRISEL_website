import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
