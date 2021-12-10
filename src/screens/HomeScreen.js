import React from 'react';
import {Button, ImageBackground, StyleSheet, View} from 'react-native';
import TitleText from '../components/TitleText';

const bgImage2 = require('../assets/img/homeNavidenio.jpg');

export default function HomeScreen({navigation}) {
  const goToSecondScreen = () => {
    console.log('Cambiando Pantalla');
    navigation.navigate('SecondScreen');
  };

  const goToThirdScreen = () => {
    navigation.navigate('ThirdScreen');
  };

  const goToFourthScreen = () => {
    navigation.navigate('FourthScreen');
  };

  return (
    <ImageBackground
      source={bgImage2}
      resizeMode="stretch"
      style={styles.image}>
      <View style={styles.superior}>
        <TitleText style={styles.title}>Catalogo Navideño</TitleText>
      </View>
      <View style={styles.inferior}>
        <Button
          title="Pan Dulce Navideño"
          color="darkgreen"
          onPress={() => goToSecondScreen()}
        />
        <Button
          title="Budines Navideños"
          color="darkgreen"
          onPress={() => goToThirdScreen()}
        />
        <Button
          title="Dulces Navideños"
          color="darkgreen"
          onPress={() => goToFourthScreen()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 100,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  superior: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inferior: {
    flex: 5,
    justifyContent: 'center',
  },
});
