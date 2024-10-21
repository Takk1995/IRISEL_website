import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';
import Home from './page/home';
import ContactUsForm from './page/contactUsForm';
import FQA from './page/fqapage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ='/' element = {<Home/>} />
          <Route path ='/cart' element = {<ShoppingCart/>} />
          <Route path ='/contactusform' element = {<ContactUsForm/>} />
          <Route path ='/fqa' element = {<FQA/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;