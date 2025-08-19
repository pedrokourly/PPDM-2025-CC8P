import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou {count} vezes!!</Text>
      <Button style={styles.button} title='Click' onPress={() => {setCount(count + 1)}} />
      <Button style={styles.button} title='Reset' onPress={() => {setCount(0)}} />
      <StatusBar style="auto" />
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
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    padding: 50,
    borderRadius: 10,
  }
});
