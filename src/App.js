import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';
import Home from './page/home'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path ='/cart' element = {<ShoppingCart/>} />
          <Route path ='/' element = {<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;