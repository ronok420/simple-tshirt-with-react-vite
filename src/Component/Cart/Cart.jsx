import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    let message;
    if(cart.length === 0){
        message=<p>Add your desire product....!!!! </p>
        
    }
    return (
        <div className='single-cart'>
            <h2>Order Summary{cart.length}</h2>
            {message}
            {
            cart.length <= 2  ? 'you can buy more ' : 'congratulation you are the lucky customer' 
                    
                
            }
            
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