import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {NullPhoto} from '../../assets';
import {Gap} from '../../components/atoms';
import {TextInput, Button} from '../../components/molecules';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => {
    // You can add your sign-up logic here
    console.log('Sign Up Data:', {
      name,
      email,
      password,
      confirmPassword,
      photo,
    });
    navigation.navigate('SignIn'); // Navigate to Sign In screen after (successful) sign up
  };

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else if (result.assets && result.assets.length > 0) {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhoto(source);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <TouchableOpacity
          style={styles.profileContainer}
          activeOpacity={0.7}
          onPress={getImage}>
          <View style={styles.profile}>
            <Image source={photo} style={styles.avatar} />
            {!photo.uri && (
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add</Text>
                <Text style={styles.addPhotoText}>Photo</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <Gap height={30} />
        <TextInput
          label="Name"
          placeholder="Type your full name"
          value={name}
          onChangeText={setName}
        />
        <Gap height={16} />
        <TextInput
          label="Email"
          placeholder="Type your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Gap height={16} />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Gap height={24} />
        <Button label="Create Account" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50, // Adjust as needed for status bar
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
