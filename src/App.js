import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';
import Product from './page/product';
import Catalog from './page/catalog';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/catalog' element={<Catalog/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
