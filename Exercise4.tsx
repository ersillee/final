import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.blackBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.yellowBox}></View>
      </View>

      <View style={styles.middleSection}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.blackBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.blackBox}></View>
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20,
  },

  middleSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },

  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },

  blackBox: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },

  yellowBox: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
  },
});
