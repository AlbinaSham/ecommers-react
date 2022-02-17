import React from 'react';
import Button from '../button/button';

import './collectionItem.css';
import { connect } from "react-redux";
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ addItem, item}) => {
  const {  name, price, imageUrl } = item;
  
  console.log(imageUrl);

  return(
    <div className='collection-item'>
    <div
      className='image-collection-item'   
      style={{
        backgroundImage: `url(${imageUrl})`
      
      }}>
      
      </div>
      
    
    <div className='collection-footer'>
    
      <span className='collection-name'>{name}</span>
      <span className='collection-price'>{price}</span>
      
    </div>
    <div className='custum-button'>
      <Button onClick = {() =>{ addItem(item)}} inverted> ADD TO CART</Button>
    </div>
    
  </div>
  )

}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});



export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);