import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {NullPhoto} from '../../assets';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign UP" />
      <View style={styles.contentContainer}>
        <Gap height={26} />

        {/* Add Photo Section */}
        <View style={styles.photoWrapper}>
          <TouchableOpacity style={styles.photoContainer}>
            <Image source={NullPhoto} style={styles.photo} />
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your Full Name" />
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  photoContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  addPhotoText: {
    color: '#8D92A3',
    fontSize: 14,
    textAlign: 'center',
  },
});
