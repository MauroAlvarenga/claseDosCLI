import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import Container from '../components/Container';
import CustomButton from '../components/CustomButton';

const bgImage = require('../assets/img/panDulceNavidenio.jpg');

export default function SecondScreen({navigation}) {
  // console.log('------------------');
  // console.log(props);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={bgImage} resizeMode="stretch" style={{flex: 1}}>
      <Container>
        <Text style={styles.textTitle}>Segunda Pantalla</Text>
        <CustomButton
          title="Volver al Inicio"
          onPress={() => goBack()}
          color="white"
        />
      </Container>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
