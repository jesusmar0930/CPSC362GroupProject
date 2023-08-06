import React from 'react';
import Catalog from '../../Components/Catalog/catalog';
import {PRODUCTS} from  '../Cart/Products';

const lifestyleProducts = [
    PRODUCTS[0], PRODUCTS[1], PRODUCTS[2], PRODUCTS[3], PRODUCTS[4]
];

const Lifestyle = () => {
  return (
    <div>
      <h1 className='pageName'>Lifestyle</h1>
      <Catalog PRODUCTS={lifestyleProducts} />
    </div>
  );
};

export default Lifestyle;
