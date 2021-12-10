import React from 'react';
import {Button, StyleSheet, Text, ImageBackground} from 'react-native';
import Container from '../components/Container';

const bgImage = require('../assets/img/dulcesNavidenios.jpg');

const FourthScreen = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={bgImage} resizeMode="stretch" style={{flex: 1}}>
      <Container>
        <Text style={styles.textTitle}>Cuarta Pantalla</Text>
        <Button
          title="Volver al Inicio"
          onPress={() => goBack()}
          color="white"
        />
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
});

export default FourthScreen;
