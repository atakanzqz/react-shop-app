import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import { ProductsContext } from '../../Contexts/ProductsContext';

function Home() {
  const { products} = useContext(ProductsContext);
  
  return (
    <div className="screen">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}> {/* Link to product details */}
              <img src={product.image} alt={product.id} />
              <h3>{product.name}</h3>
              <p>{product.price} TL</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
