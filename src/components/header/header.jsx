import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cartIcon/cartIcon';


import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


import './header.css';
import CartDropdown from '../cartDropdown/cartDropdown';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <h3>
          M E J U 
      </h3>
      
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {
        currentUser ?(
        <div className='option' onClick={ () => auth.signOut()}>
          SIGN OUT </div>
           ):(
            <Link className='option' to='/signin'>
               SIGN IN
             </Link>
           ) }
      
      <Link>
          <CartIcon />
      </Link>
     
    </div>
    {
      hidden ? null : <CartDropdown />
    }
    
  </div>
);


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);