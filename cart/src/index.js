import React from 'react';
import { createRoot } from 'react-dom/client';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <h1>Cart MFE</h1>
      <Cart />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
