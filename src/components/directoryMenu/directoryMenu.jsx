import React from 'react';
import { createStructuredSelector } from 'reselect';


import './directoryMenu.css';

import MenuItem from '../menuItem/menuItem';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/select.directory';




    const DirectoryMenu = ({sections}) => {
          return (
            <div className='menu'>
               <h1>OUR COLLECTION.</h1>
            <div className='directory-menu'>
              
              {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
              ))}
            </div>
            </div>
            
          );
        }
      

        const mapStateToProps = createStructuredSelector({
          sections: selectDirectorySections
        });
        
        export default connect(mapStateToProps)(DirectoryMenu);