import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('products.json')
            .then(data => {
                setProducts(data.data)
            })
    }, []);
    console.log(products);
    return (
        <>
            <NavBar></NavBar>
            <h1 className='text-5xl font-semibold text-center mb-10 underline'>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                {
                    products.map((p,i)=><ProductCard 
                    key={i}
                    product={p}
                    ></ProductCard>)
                }
            </div>
        </>
    );
};

export default Products;