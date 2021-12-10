import React from 'react';
import {Button, ImageBackground, StyleSheet, View} from 'react-native';
import TitleText from '../components/TitleText';
import CustomButton from '../components/CustomButton';

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
    <ImageBackground source={bgImage2} resizeMode="stretch" style={{flex: 1}}>
      <View style={styles.superior}>
        <TitleText style={styles.title}>Catalogo Navideño</TitleText>
      </View>
      <View style={styles.inferior}>
        <CustomButton title="Pan Dulce" onPress={() => goToSecondScreen()} />
        <CustomButton title="Budines" onPress={() => goToThirdScreen()} />
        <CustomButton
          title="Dulces Navideños"
          onPress={() => goToFourthScreen()}
        />
        <CustomButton onPress={() => goToSecondScreen} title="'A ver'" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  superior: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inferior: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
  },
});
