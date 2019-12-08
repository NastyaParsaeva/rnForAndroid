import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Login() {
  return (
    <View style={styles.login}>
      <Text>Fiday's Shop</Text>
      <TextInput style={styles.input} placeholder='email' />
      <TextInput style={styles.input} placeholder='password' />
      <Button
          title="login"
          onPress={() => Alert.alert('Login pressed')}
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
