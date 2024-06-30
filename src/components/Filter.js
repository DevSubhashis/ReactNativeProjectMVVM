import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PriceFilterHandler from '../screens/product/filters/PriceFilterHandler';
import BrandFilterHandler from '../screens/product/filters/BrandFilterHandler';
import { useProductContext } from '../screens/product/ProductContext';

const Filter = () => {
  const { filterProducts } = useProductContext();

  const applyFilters = () => {
    const priceFilter = new PriceFilterHandler(min = 10, max = 100);
    const brandFilter = new BrandFilterHandler(brandName = 'Gucci');
    priceFilter.setNext(brandFilter);
    filterProducts(priceFilter);
  };

  return (
    <View style={styles.container}>
      <Button title="Filter: Red & India" onPress={applyFilters} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Filter;
