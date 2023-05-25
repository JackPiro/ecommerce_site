import React from 'react';
import axios from 'axios';

const Cart = (props) => {
  const {cartList, setCartList} = props;
  const {cartShow, setCartShow} = props;

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
                return  <div className="flex flex-col text-left w-80 h-28 bg-white p-3 border rounded-lg shadow-lg my-3" key={index}>
                  <p>Item: {}</p>
                </div>
              })
            }
        </div>
      </div> 
  );
};

export default Cart;