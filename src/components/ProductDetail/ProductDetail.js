import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access the URL params
import { ProductsContext } from '../../Contexts/ProductsContext';


function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const { products } = useContext(ProductsContext); // Get the products context
  
  // Find the product that matches the ID
  const product = products.find(p => p.id === parseInt(id)); // Match ID as integer

  if (!product) {
    return <div>Sorry, the product you're looking for doesn't exist.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image || 'defaultImage.jpg'} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price} TL</p>
      <p>{product.description || 'No description available.'}</p>
    </div>
  );
}

export default ProductDetail;
