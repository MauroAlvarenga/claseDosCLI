import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const FourthScreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Fourth Screen</Text>
      <Button title="Volver" onPress={() => goBack()} />
    </View>
  );
};

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

export default FourthScreen;
