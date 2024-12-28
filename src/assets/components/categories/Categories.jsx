import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';

export default function Categories() {
    // TODO: fetch data from API
    const {data, isLoading, errors} = useFetch('https://dummyjson.com/products/category-list');
    //console.log(`data is ${data}`);

    // Handle loading state
  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  // Handle error state
  if (errors) {
    return <div>Error: {errors}</div>;
  }

  // Safely access categories (ensure data is valid)
  const categories = data;

  //console.log(`categories is ${categories}`);

  


  return (
<div className="container mt-4 categories">
  <h1>Categories</h1>
  {categories.length > 0 ? (
    // Display categories
    <div className="row d-flex flex-wrap justify-content-center text-center ">
      {categories.map((category, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">{category}</h2>
              <Link className="link-underline-light" to={`/category/${category}`}> 
              {/* { https://dummyjson.com/products/category/smartphones */} 
                View Products
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No categories available.</p>
  )}
</div>

)
}




