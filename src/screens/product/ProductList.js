import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useProductContext } from './ProductContext';

const ProductList = () => {
  const { filteredProducts, error } = useProductContext();

  return (
    <View>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                <Text>Price: ${item.price}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Rating: {item.rating}</Text>
              </ListItem.Content>
            </ListItem>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductList;
