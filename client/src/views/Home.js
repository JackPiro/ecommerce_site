import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';

const Home = (props) => {
    const [productList, setProductList] = useState([]);
    const {cartList, setCartList} = props;

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProductList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div className='p-6 justify-center w-screen px-32 pt-16'>
            <div className='p-6 grid grid-cols-4'>
                {
                    productList.map((item) => {
                        return (
                            <div className='p-10'>
                                <ItemCard key={item._id} item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;
