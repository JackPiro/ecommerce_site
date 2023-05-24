import { React, useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import axios from 'axios';

const Home = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProductList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div className='p-6 justify-center'>
            <div className='p-6 grid grid-cols-4'>
                {
                    productList.map((item) => {
                        return (
                            <div className='p-10'>
                                <ItemCard key={item._id} item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;
