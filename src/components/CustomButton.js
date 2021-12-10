import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const CustomButton = props => {
  const {onPress, title = 'Pan Dulce'} = props;
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'darkgreen',
    borderRadius: 5,
    marginBottom: 3,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
});
