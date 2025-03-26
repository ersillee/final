import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
});
