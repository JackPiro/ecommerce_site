import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ItemDetail from './views/ItemDetail';
import Navbar from './components/Navbar';
import Cart from './views/Cart';
import Category from './views/Category';
import axios from 'axios';

function App() {
  const [cartList, setCartList] = useState([]);
  const [cartShow, setCartShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/')
        .then((res) => {
            setCartList(res.data.carts);
            console.log(res.data);
        })
        .catch(err => console.log(err));
}, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar cartShow={cartShow} setCartShow={setCartShow}/>
      {cartShow ?
      <Cart cartList={cartList} setCartList={setCartList} cartShow={cartShow} setCartShow={setCartShow} className="transition-all"/>
      : null
      }
        <Routes>
          <Route element = { <Home cartList={cartList} setCartList={setCartList}/> } path='/' default/>
          <Route element = { <ItemDetail/> } path='/item-detail/:id'/>
          <Route element = { <Category/>} path='category/:category'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
