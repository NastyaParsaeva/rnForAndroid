import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';

const products = [
  {
    name: 'Product 1',
    id: '1',
  },
  {
    name: 'Product 2', 
    id: '2',
  },
  {
    name: 'Product 3', 
    id: '3',
  },
  {
    name: 'Product 4',
    id: '4',
  },
  {
    name: 'Product 5',
    id: '5',
  },
  {
    name: 'Product 6',
    id: '6',
  },
  {
    name: 'Product 7',
    id: '7',
  },
  {
    name: 'Product 8',
    id: '8',
  },
  {
    name: 'Product 9',
    id: '9',
  },
  {
    name: 'Product 10',
    id: '10',
  },
]

export default function ProductList() {
  return (
    <View style={styles.login}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem title={item.name} />}
        keyExtractor={product => product.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'stretch',
    marginHorizontal: 30,
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
  }
});
