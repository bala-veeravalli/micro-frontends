import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Products = lazy(() => import('products/Products'));
const Cart = lazy(() => import('cart/Cart'));
const ProductDetail = lazy(() => import('pdp/ProductDetail'));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Container App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">Product Detail</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
        <hr />
        <Cart />
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);