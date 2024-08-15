import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100 w-80 shadow-xl justify-self-center">
            <figure>
                <img
                    src={product?.productImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <small className='w-20 text-center bg-blue-500 text-white rounded-full p-1'>{product?.category}</small>
                <h2 className="card-title">{product?.productName}</h2>
                <small className='text-lg'>Brand: {product?.brand}</small>
                <p>{product?.description}</p>
                <div className='flex justify-between'>
                    <p className='text-xl text-blue-500'>{product?.price}$</p>
                    <p className='text-xl text-blue-500 flex items-center gap-1'>{product?.ratings}<FaStar className='text-yellow-500' /></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;