import React from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

export default function ProductListItem({title}) {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(`${title} pressed`)}
    >
    <Text>{title}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});
