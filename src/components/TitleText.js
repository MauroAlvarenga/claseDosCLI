import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TitleText = ({children}) => {
  return <Text style={styles.textTitle}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    color: 'blue',
  },
});
