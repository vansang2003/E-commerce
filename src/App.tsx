import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componenets/Header';
import Home from './Modules/Home';
import { Routes,Route } from 'react-router-dom';
import Footer from './componenets/Footer';
import Product from './Modules/Product';
import Categories from './componenets/Categories';
import CategoryProducts from './Modules/CategoryProducts';
import Cart from './Modules/Cart';
import AllProduct from './Modules/AllProduct';
import Contact from './Modules/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<AllProduct/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/categories/:name' element={<CategoryProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  
  );
}

export default App;
