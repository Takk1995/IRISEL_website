import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';
import PopCart from './components/popCart';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path ='/cart' element = {<ShoppingCart/>} />
          <Route path ='/' element = {<PopCart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
