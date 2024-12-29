import React from 'react'
import useFetch from '../../customHook/useFetch'
import { useParams } from 'react-router-dom'
import LoaderC from '../loader/LoaderC';


export default function SpecificProduct() {
    const {id} = useParams();
    const {data, isLoading, errors} = useFetch(`https://dummyjson.com/products/${id}`);
    console.log(data);

// Handle loading state
    if (isLoading) {
        return <LoaderC />;
      }   
      
      if (errors) return <p>Error: {errors.message}</p>;


const productDetails= data
  return (
    // Render the product details here...
    <div className="container mt-4 products">
    <div className="row d-flex flex-wrap justify-content-center text-center ">
<div>
          <h2>{productDetails.title}</h2>
          <p>{productDetails.description}</p>
          <p>Category: {productDetails.category}</p>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <p>Price: ${productDetails.price}</p>
        </div>
    </div>
</div>

  )  
}
