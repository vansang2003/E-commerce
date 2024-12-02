import { useEffect, useState } from "react";
import HeadProduct from '../../componenets/HeadProduct';
import Categories from "../../componenets/Categories";
import Skeleton from "react-loading-skeleton";


function AllProduct() {
    const [products, setProducts] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
      const fetchProducts = async () => {
          const response = await fetch('https://fakestoreapi.com/products')
          const data = await response.json()
          console.log(data)
          setProducts(data)
      }
      fetchProducts()
  }, [])

    return (
      <>
      <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Categories</h1>
        </div>
      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most of Popular Product</h1>
        </div>
      {
        products.length > 0 ?
        <HeadProduct products={products}/>
        :
        <div>Loading.....</div>
      }
      </>
    )
        
  }
  export default AllProduct;
  