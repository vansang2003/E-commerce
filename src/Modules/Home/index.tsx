import React, { useEffect, useState } from 'react';
import Hero from '../../componenets/Hero';
import ProductCard from '../../componenets/ProductCard';
import Stats from '../../componenets/StatCard';
import Categories from '../../componenets/Categories';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      
      <Stats />
      
    </>
  );
}

export default Home;
