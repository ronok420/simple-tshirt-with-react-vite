import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Thsirt/Tshirts';
import './Home.css'
import Cart from '../Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const shirt = useLoaderData();
    const [cart,setCart] =useState([]);

    const handleAddtoCart = addtoCart => {
        // console.log(addtoCart);
        const exist = cart.find(ts => ts._id === addtoCart._id);
        if(exist){
                toast("already added this t-shirt")
        }
        else{
            const newCart =[...cart,addtoCart];
            setCart(newCart);
            // console.log(newCart);
        }
        

    }
    const handleRemoveCart = id =>{
        console.log(id);
        const remaining=cart.filter(ts => ts._id!== id);
        setCart(remaining);
    }

    // console.log(shirt);
    return (
        <div className='product-container'>
                       

            <div className='t-shirt-container'>
            {/* <h2>this is the home page and length is : {shirt.length}</h2> */}
            {
                shirt.map(tr => <Tshirts
                    key={tr._id} tshirt={tr} handleAddtoCart={handleAddtoCart} 
                    handleRemoveCart={handleRemoveCart}
                ></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                <Cart
                cart={cart}
                handleRemoveCart={handleRemoveCart}
                
                ></Cart>

            </div>
            
        </div>
    );
};

export default Home;