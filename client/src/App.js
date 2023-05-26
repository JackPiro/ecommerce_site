import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ItemDetail from './views/ItemDetail';
import Category from './views/Category';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = { <Home /> } path='/' default/>
          <Route element = { <ItemDetail/> } path='/item-detail/:id'/>
          <Route element = { <Category/>} path='category/:category'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
