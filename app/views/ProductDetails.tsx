import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Image } from 'react-native';

const productItem = {
  iconUrl: 'https://img.icons8.com/wired/2x/world-map.png',
  title: 'Product 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default function ProductDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Image 
          source={{uri: productItem.iconUrl}}
        ></Image>
        <Text style={styles.title}>{productItem.title}</Text>
      </View>
      <View style={styles.section2}>
        <Text style={styles.description}>{productItem.description}</Text>
        <Button 
          title="All Products"
          onPress={() => Alert.alert('All products')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  
  title: {
    fontSize: 30,
  },

  section2: {
    margin: 40,
  },

  description: {
    marginBottom: 40,
  },

  section1: {
    marginHorizontal: 20,
  }


});
