import React from 'react';
import ProductList from './product/ProductList';
import Filter from '../components/Filter';
import { ProductProvider } from './product/ProductContext';

const ProductHome = () => {
    return (
        <ProductProvider>
            <>
                <Filter />
                <ProductList />
            </>
        </ProductProvider>
    );
};

export default ProductHome;
