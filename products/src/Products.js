import React from 'react';
import eventBus from 'cart/eventBus';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const handleAddToCart = (product) => {
    eventBus.emit('addToCart', product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;