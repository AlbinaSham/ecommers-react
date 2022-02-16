import React from 'react';

import './cartItem.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img className='cart-item-image' src={imageUrl} alt='item' />
    <div className='item-details'>
      <div>
         <span className='name'>{name}</span>
      </div>
      <div>
      <span className='price'>
        {quantity} x ${price}
      </span>
      </div>
     
    </div>
  </div>
);

export default CartItem;