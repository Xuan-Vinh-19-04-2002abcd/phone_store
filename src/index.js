import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Card } from './components/Content/Card/Card';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Detail from './components/Content/Detail/Detail';
import Cart from './components/Content/Cart/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/detail/:productID" element={<Detail />}></Route>
        <Route path='/' element={<Content/>}></Route>
      </Routes>
      
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
