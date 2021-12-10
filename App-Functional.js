import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Martin Feldman');

  const changeName = () => {
    setName('Ale Bogado');
    console.log('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Hola {name}</Text>
      <Text>Esto es un componente tipo funcional</Text>
      <Button
        title="Cambiar nombre"
        style={styles.button}
        onPress={() => changeName()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 150,
    fontSize: 24,
    color: 'blue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});
