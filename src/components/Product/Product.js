import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name, ratings, img, seller, price}=props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p className='product-manufacture'>Manufacturer: {seller} </p>
            <p className='product-rating'>Rating: {ratings} </p>
            </div>
            <button onClick={()=>props.addToCart(props.product)}  className='cart-btn'> <p>Add to Cart</p> 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;