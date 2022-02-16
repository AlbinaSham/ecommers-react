import React from 'react';
import { withRouter } from 'react-router-dom';


import './menuItem.css';

const MenuItem = ({ title, imageUrl,imageUrl2, size, history, linkUrl, match }) => (
  <div  className= "menu-item">
      
    <div
      className='menu-image'
      style={{
        "--my-image": `url(${imageUrl})`,
        '--hover-image': `url(${imageUrl2})`
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      
    />
    <div className='menu-content'>
       
      <h3 className='menu-title'>{title.toUpperCase()}</h3>
      
    </div>
  </div>
);

export default withRouter(MenuItem);