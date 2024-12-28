import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './assets/components/categories/Categories'
import CategoriesProducts from './assets/components/categories/CategoriesProducts'
import Product from './assets/components/product/Product'
import Navbar from './assets/components/navbar/Navbar';
import SpecificProduct from './assets/components/product/SpecificProduct';
import Footer from './assets/components/footer/Footer';
import AddProduct from './assets/components/product/AddProduct';


function App() {

  return (
    <>
      {/* <Categories/> */}
      {/* <CategoriesProducts /> */}
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/products" element={<CategoriesProducts />} />
        <Route path="/product" element={<Product />} />
        {/* Route for a specific Product */}
        <Route path="/products/:id" element={<SpecificProduct />} />
        {/* Route for a specific category */}
        <Route path="/category/:category" element={<CategoriesProducts />} />
        {/* Add Product */}
       <Route path="/addproduct" element={<AddProduct />} />
        {/* Not found page */}
        <Route path="*" element={<h2>Page Not Found!</h2>} />
      </Routes>
<Footer />
    </>
  )
}

export default App
