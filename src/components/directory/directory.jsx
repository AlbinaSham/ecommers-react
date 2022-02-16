import React from 'react';
import Button from '../button/button';
import { withRouter } from 'react-router-dom';


import "./directory.css";






const Directory = ({history}) =>{
    return(<div className='directory'>
        <div className='background-image'>
         
        </div>
        <div className='content'>
         <b>
            <h1 >
                LAST CHANCE
            </h1>
         </b>
         <h3>
             Our in-stock styles are moving fast. 
             
         </h3>
         <h3>
           Order by Feb 7 to get it by Feb 14.
         </h3>
         
            <div className='button'>
               <Button onClick={() => {
                  history.push('/shop');
        
            }}
             >SHOP NOW</Button>
            </div> 
         
         
        </div>
    </div>)
}

export default withRouter(Directory);