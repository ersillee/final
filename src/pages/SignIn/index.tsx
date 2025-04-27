import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>LOG IN</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#6B7280"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#6B7280"
          secureTextEntry
        />

        <Pressable
          style={({pressed}) => [
            styles.loginButton,
            pressed && styles.buttonPressed,
          ]}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000000',
    elevation: 2, // shadow for android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  loginButton: {
    backgroundColor: '#9333EA',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#9333EA',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{scale: 0.98}],
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 12,
    color: '#6B7280',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
});
