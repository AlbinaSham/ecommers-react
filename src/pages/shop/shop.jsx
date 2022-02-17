import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import Category from '../category/category';

const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Category} />
    
    
  </div>
);

export default Shop;