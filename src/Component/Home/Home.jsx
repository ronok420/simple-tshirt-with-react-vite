import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Thsirt/Tshirts';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const shirt = useLoaderData();
    const [cart,setCart] =useState([]);

    const handleAddtoCart = addtoCart => {
        console.log(addtoCart);
    }

    // console.log(shirt);
    return (
        <div className='product-container'>
                       

            <div className='t-shirt-container'>
            {/* <h2>this is the home page and length is : {shirt.length}</h2> */}
            {
                shirt.map(tr => <Tshirts
                    key={tr._id} tshirt={tr} handleAddtoCart={handleAddtoCart}
                ></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                <Cart
                handleAddtoCart={handleAddtoCart}
                ></Cart>

            </div>
            
        </div>
    );
};

export default Home;