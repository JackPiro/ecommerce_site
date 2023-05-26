import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Cart = (props) => {
  const {cartList, setCartList} = props;
  const {cartShow, setCartShow} = props;
  const [quantity, setQuantity] = useState(0);

  const showCart = () => {
    setCartShow(false);
  }

  const deleteFromCart = (cartId) => {
    axios.delete('http://localhost:8000/api/' + cartId)
      .then(res => {
        console.log(res)
        setCartList(cartList.filter(cart => cart._id !== cartId));
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  const addOne = () => {
    setQuantity(quantity + 1);
};

const subtractOne = () => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    };
};
  return (
      <div className="fixed z-50 top-0 right-0 h-screen w-96 shadow-xl bg-neutral-300 border border-solid border-l-black overflow-auto">
        <div className="h-28 text-slate-700 font-semibold px-3 flex">
          <button onClick={showCart}>Hide Cart</button>
        </div>
        <p className="font-semibold text-lg">Cart</p>
        <br></br>
        <div className="flex flex-col w-full pl-6">
            {
              cartList.map((cart, index) => {
                return  <div className="flex flex-col text-left w-80 h-42 bg-white p-3 border rounded-lg shadow-lg my-3" key={index}>
                  <p>Item: {cart.productName}</p>
                  <p>Price: ${cart.productPrice}</p>
                  <p>Quantity: {cart.quantity}</p>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-40 mt-3" onClick={()=> deleteFromCart(cart._id)}>Remove</button>
                  <div className="flex items-center justify-center bg-gray-200 rounded-md p-2 mt-3">
                    <button onClick={subtractOne} className="px-2 -py-3 bg-slate-400 text-white rounded-md hover:opacity-60">-</button>
                        <span className="mx-4 text-xs font-bold">{quantity}</span>
                    <button onClick={addOne} className="px-2 -py-3 bg-slate-400 text-white rounded-md hover:opacity-60">+</button>
                    <Link className='ml-3 btn btn-blue'>Edit Quantity</Link>
                </div>
                </div>
              })
            }
        </div>
      </div> 
  );
};

export default Cart;