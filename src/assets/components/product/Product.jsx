import React from 'react'
import useFetch from '../../customHook/useFetch';
import { Link, useParams } from 'react-router-dom'; 
import Loader from '../loader/Loader';



export default function Product() {
    const productId= useParams();
        const { data, isLoading, errors } = useFetch('https://dummyjson.com/products');
        console.log(data);

   // Handle loading state
       if (isLoading) {
           return <Loader />;
         }
    
      // Handle error state
      if (errors) {
        return <div>Error: {errors}</div>;
      }
    
      // Safely access categories (ensure data is valid)
    const products = data.products;
    
    console.log(`products are ${products}`);
  
    
  return (
    // Render the product details here...
    <div className="container mt-4 categories">
    <div className="row d-flex flex-wrap justify-content-center text-center ">

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <img src={product.thumbnail} alt={product.title} />
          <p>Price: ${product.price}</p>
<Link to={`/products/${product.id}`}>Details</Link> 
        </div>
      ))}
    </div>
</div>

  )
}



