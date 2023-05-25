import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ItemCard = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);

    if (!item) {
        return (
            <div>...We are loading</div>
        );
    };

    const handleCartCreate = (e) => {
      e.preventDefault();
        axios.post('http://localhost:8000/api/cart', {productId: item.id, quantity: quantity})
            .then((res) => {
                console.log(res.data);
                setCart(res.data);
            });
        console.log(cart);
    };

    const handleCartAdd = () => {
        axios.put('http://localhost:8000/api/' + cart._id, { productId: item.id, quantity: quantity })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        console.log(cart);
    }

    const addOne = () => {
        setQuantity(quantity + 1);
        setTotal((quantity +1 ) * item.price);
    };

    const subtractOne = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setTotal((quantity - 1) * item.price)
        };
    };

    const checkCreateCart = (e) => {

    }

    return (
        <div className='p-5 m-5 h-full w-52 rounded-lg border-solid border bg-slate-100 shadow-lg'>
            <div className='group relative'>
                {/* <img className='block rounded-lg transition duration-300 shadow-xl object-cover ' src={item.image}/> */}
                <img className='block w-full md:w-72 h-44 rounded-lg transition duration-300 shadow-xl object-cover' src={item.image} alt=""/>
                <div className='rounded-lg absolute inset-0 flex items-center justify-center bg-black opacity-0 transition duration-300 group-hover:opacity-40 w-full h-full'>
                    <Link onClick={handleCartCreate} className='opacity-0 group-hover:opacity-100 text-white font-bold py-2 px-4 rounded hover:text-blue-400 transition'>Add to Cart</Link>
                </div>
            </div>
            <div className='justify-between'>
                <Link to={'/item-detail/' + item._id} ><p className='text-left font-extrabold hover:underline'>{item.title}</p></Link>
                <p className='text-left font-semibold mt-2'>{'$' + item.price}</p>
                <div className="flex items-center justify-center bg-gray-200 rounded-md p-2 ">
                    <button onClick={subtractOne} className="px-2 -py-3 bg-slate-400 text-white rounded-md hover:opacity-60">-</button>
                        <span className="mx-4 text-xs font-bold">{quantity}</span>
                    <button onClick={addOne} className="px-2 -py-3 bg-slate-400 text-white rounded-md hover:opacity-60">+</button>
                </div>
                <div>
                    {
                        total > 0 ? 
                            <p>
                                Total: ${total}
                            </p>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
