import React, { createContext, useContext } from 'react';
import useProductListViewModel from './ProductListViewModel';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productState = useProductListViewModel();

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
