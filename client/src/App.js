import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div className="flex">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route element={<Main productList={productList} setProductList={setProductList}/>} path="/" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
