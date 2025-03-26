import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './Component/Input';
import Button from './Component/Button';
import Title from './Component/Title';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleRegister = () => {
    console.log('Form Data:', formData);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={text => handleChange('name', text)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={text => handleChange('username', text)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        keyboardType="email-address"
        onChangeText={text => handleChange('email', text)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={text => handleChange('address', text)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={text => handleChange('phoneNumber', text)}
      />
      <Button label="Register" color="#D633D8" onPress={handleRegister} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
