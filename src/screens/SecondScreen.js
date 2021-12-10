import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function SecondScreen({navigation}) {
  // console.log('------------------');
  // console.log(props);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Second Screen</Text>
      <Button title="Volver" onPress={() => goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'blue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
});
