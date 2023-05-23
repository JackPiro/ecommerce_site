import React, {useEffect} from 'react';
import axios from 'axios';

const Main = (props) => {
  const {productList, setProductList} = props;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data)})
      .catch((err)=>{console.log(err);});
  }, []);

  return (
    <div>
    </div>
  )
}

export default Main;