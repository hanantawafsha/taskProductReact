import React from 'react'
import useFetch from '../../customHook/useFetch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';

export default function CategoriesProducts() {
   const {category} = useParams();
    const {data, isLoading,errors} = useFetch(`https://dummyjson.com/products/category/${category}`);
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
    
    //   console.log(`products are ${products}`);
  
  return (
    <div className="container mt-4">
    {products.length > 0 ? (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={product.thumbnail} alt={product.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                {/* link to product details */}
                <Link to={`/products/${product.id}`}>Product Details</Link> 

              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No products found.</p>
    )}
  </div>
  )
}
