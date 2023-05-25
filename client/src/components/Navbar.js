import React from 'react';

const Navbar = (props) => {
  const {cartShow, setCartShow} = props;

  const showCart = () => {
    setCartShow(true);
  }
  return (
    <nav className="fixed bg-opacity-100 bg-white top-0 w-screen h-28 m-0 flex shadow-lg justify-center z-40">
          <div className="flex p-3">
            <a href="/"><img className="w-36"
            src="https://i.fbcd.co/products/resized/resized-750-500/667ca7502e4e218f01e4fbb26e01e2fc7fe17370f64bf444f60818b9d1b2c2b2.webp" alt="bag icon"/></a>
            <a href="/"><h1 className=" text-2xl text-slate-700 font-semibold w-28">General Goods Store</h1></a>
          </div>
          <div className="flex w-2/3 justify-center p-3">
            <ul className="flex my-5 w-1/3 justify-between">
              <li className=" border border-slate-400 hover:border-slate-900 transition-all p-3 h-12">Clothing</li>
              <li className=" border border-slate-400 hover:border-slate-900 transition-all p-3 h-12">Electronics</li>
              <li className=" border border-slate-400 hover:border-slate-900 transition-all p-3 h-12">Jewelry</li>
            </ul>
          </div>
          <div className="flex flex-col w-10 pr-2 justify-center">
            <button onClick={showCart}>
              <img className="w-10"
              src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"/>
            </button>
          </div>
    </nav>
  )
}

export default Navbar;