import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import EduTrackLogo from '../../assets/edutrack.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={EduTrackLogo} style={styles.logo} />
      <Text style={styles.title}>EduTrack</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000000',
  },
});
