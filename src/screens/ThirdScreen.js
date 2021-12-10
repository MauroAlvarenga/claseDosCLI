import React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import Container from '../components/Container';
import CustomButton from '../components/CustomButton';

const bgImage = require('../assets/img/budinNavidenio.jpg');

export default function ThirdScreen({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={bgImage} resizeMode="stretch" style={{flex: 1}}>
      <Container>
        <Text style={styles.textTitle}>Tercera Pantalla</Text>
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
    backgroundColor: 'lightgray',
  },
});
