import React from 'react';
import './Tshirt.css'

const Tshirts = ({tshirt,handleAddtoCart}) => {
    const {_id,name,picture,price,gender}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            {/* <p>{gender}</p> */}
            <button onClick={()=>handleAddtoCart(tshirt)}>buy now</button>
           
        </div>
    );
};

export default Tshirts;