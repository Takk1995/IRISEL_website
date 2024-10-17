import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path ='/cart' element = {<ShoppingCart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
