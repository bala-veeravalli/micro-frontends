import React from 'react';
import { createRoot } from 'react-dom/client';
import Products from './Products';

const App = () => {
  return (
    <div>
      <h1>Products MFE</h1>
      <Products />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
