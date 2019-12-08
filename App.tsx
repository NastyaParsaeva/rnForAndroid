import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetails from './app/views/ProductDetails';
// import ProductList from './app/views/ProductList';
// import Login from './app/views/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
