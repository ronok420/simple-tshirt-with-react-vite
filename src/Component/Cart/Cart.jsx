import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div className='single-cart'>
            <h2>Order Summary{cart.length}</h2>
            {
               cart.map(ts => <p>
                {ts.name}
                <button onClick={()=>handleRemoveCart(ts._id)} style={{marginLeft:'5px'}}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;