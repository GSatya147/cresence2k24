import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from "./components/helper/ScrollToTop";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* < ScrollToTop/> */}
    <App />
  </React.StrictMode>
);
