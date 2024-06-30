import { useState, useEffect } from 'react';
import ProductService from './ProductService';

const useProductListViewModel = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await ProductService.fetchProducts();
        setProducts(products);
        setFilteredProducts(products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (handler) => {
    const filtered = handler.handle(products);
    setFilteredProducts(filtered);
  };

  return {
    products,
    filteredProducts,
    error,
    filterProducts,
  };
};

export default useProductListViewModel;
