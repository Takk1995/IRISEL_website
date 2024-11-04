import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css'
import ShoppingCart from './page/shoppingCart';
import Home from './page/home';
import ContactUsForm from './page/contactUsForm';
import FQA from './page/fqapage';
import Product from './page/product';
import Catalog from './page/catalog';
import Quizpage from './page/QuizPage/QuizPage';
import Customized from './page/CustomizedPage/CustomizedPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ='/' element = {<Home/>} />
          <Route path ='/cart' element = {<ShoppingCart/>} />
          <Route path ='/contactusform' element = {<ContactUsForm/>} />
          <Route path ='/fqa' element = {<FQA/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:code' element={<Product />} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/Quiz' element={<Quizpage/>} />
          <Route path='/Customized' element={<Customized/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;