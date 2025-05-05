import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message'; // Import untuk menampilkan pesan

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Untuk indikator loading

  const handleLogin = async () => {
    setLoading(true);
    // Lakukan validasi sederhana di sisi klien
    if (!email || !password) {
      showMessage({
        message: 'Email dan password harus diisi.',
        type: 'danger',
      });
      setLoading(false);
      return;
    }

    // Di sini Anda akan menambahkan logika autentikasi dengan backend Anda
    console.log('Attempting login with:', {email, password});

    // Contoh simulasi login berhasil setelah 2 detik
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home'); // Navigasi ke Home jika login berhasil
      showMessage({
        message: 'Login berhasil!',
        type: 'success',
      });
    }, 2000);

    // Contoh simulasi login gagal setelah 2 detik
    // setTimeout(() => {
    //   setLoading(false);
    //   showMessage({
    //     message: 'Login gagal. Periksa email dan password Anda.',
    //     type: 'danger',
    //   });
    // }, 2000);
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>LOG IN</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#6B7280"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#6B7280"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={({pressed}) => [
            styles.loginButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleLogin}
          disabled={loading}>
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </Pressable>

        <TouchableOpacity
          onPress={() => {
            // Tambahkan logika navigasi ke halaman lupa kata sandi jika ada
            console.log('Forgot Password pressed');
          }}>
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
    elevation: 2,
    shadowColor: '#000',
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
