import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Thsirt/Tshirts';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const shirt = useLoaderData();
    console.log(shirt);
    return (
        <div className='product-container'>
                       

            <div className='t-shirt-container'>
            {/* <h2>this is the home page and length is : {shirt.length}</h2> */}
            {
                shirt.map(tr => <Tshirts
                    key={tr._id} tshirt={tr}
                ></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                <Cart></Cart>

            </div>
            
        </div>
    );
};

export default Home;