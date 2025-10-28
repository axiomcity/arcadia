import React from 'react';
import ReactDOM from 'react-dom/client';

import '../assets/style.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Index from './components/Index/Index.jsx';
import Footer from './components/Footer/Footer.jsx';

const root = document.querySelector('#App');
const createRoot = ReactDOM.createRoot(root);

createRoot.render(
  <React.StrictMode>
    <Navbar />
    <Index />
    <Footer />
  </React.StrictMode>
);