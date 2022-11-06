import React, { useEffect, useState } from 'react';
import Productcard from '../Productcard/Productcard';

const Home = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    return (
        <>
        {
            products.map(product=><Productcard key={product._id} product={product}></Productcard> )
        }
        </>
    );
};

export default Home;