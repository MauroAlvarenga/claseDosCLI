import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class AppClase extends Component {
  //componentDidCatch() {} //Catch errors
  //componentDidMount() {} // run functions at start
  //componentDidUpdate() {} // obtain changes when app updates
  //componentWillUnmount() {} // kill functions? - We leave component and want to kill things

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tincho',
      apellido: 'Lopez',
    };
  }

  // componentDidMount() {
  //   //this.saludar();
  // }

  // saludar() {
  //   console.log('Hola Mundo');
  // }

  changeName = () => {
    this.setState({
      name: 'Ale',
      apellido: 'Bogado',
    });
    console.log('Boton Presionado');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          Hola {this.state.name} {this.state.apellido}
        </Text>
        <Button
          title="Cambiar nombre"
          style={styles.button}
          onPress={() => this.changeName()}
        />
      </View>
    );
  }
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
    backgroundColor: 'gray',
  },
  button: {
    marginTop: 150,
  },
});
