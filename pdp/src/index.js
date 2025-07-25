import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <div>
      <h1>PDP MFE</h1>
      <ProductDetail />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
