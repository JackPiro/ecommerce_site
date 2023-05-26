import { React, useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Cart from './Cart';

const Home = () => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [cartShow, setCartShow] = useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProductList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
      axios.get('http://localhost:8000/api/')
          .then((res) => {
              setCartList(res.data.carts);
              console.log(res.data);
          })
          .catch(err => console.log(err));
  }, [])

    return (
      <div>
        <div>      
          <Navbar cartShow={cartShow} setCartShow={setCartShow}/>
            {cartShow ?
              <Cart cartList={cartList} setCartList={setCartList} cartShow={cartShow} setCartShow={setCartShow} className="transition-all"/>
                : null
              }
        </div>
        <div className='p-6 justify-center w-screen px-32 pt-16'>
            <div className='p-6 grid grid-cols-4'>
                {
                    productList.map((item) => {
                        return (
                            <div className='p-10'>
                                <ItemCard key={item._id} item={item} cartList={cartList} setCartList={setCartList}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    );
};

export default Home;
