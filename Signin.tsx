// signIn.tsx
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';

const Signin = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry
      />
      <Input label="Alamat" placeholder="Masukan alamat anda" />
      <Input
        label="No Tlp"
        placeholder="Masukan nomor telepon anda"
        keyboardType="phone-pad"
      />

      {/* Tombol Sign In */}
      <Button label="Sign In" color="orange" />

      {/* Tombol Sign In dengan Sosial Media */}
      <Button label="Sign in Google" color="#DB4437" />
      <Button label="Sign in Facebook" color="#1877F2" />
      <Button label="Sign in Apple" color="#000000" />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
