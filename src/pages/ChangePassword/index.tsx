import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleCreatePassword = () => {
    // Add your logic to handle password change here
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
    // You would typically send this data to your backend for verification and update
  };

  return (
    <LinearGradient
      colors={['#E0BBE4', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Replace with your back icon */}
          <Text style={styles.backButton}></Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="masukan password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="masukan password baru"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="konfirmasi password baru"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreatePassword}>
          <Text style={styles.createButtonText}>create</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Adjust for status bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  backButton: {
    fontSize: 24,
    color: '#333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#ede6e6', // Light gray input background
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '90%',
    fontSize: 16,
    color: 'rgb(15, 15, 15)',
  },
  createButton: {
    backgroundColor: '#c9b0d6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '40%',
  },
  createButtonText: {
    color: '#9400D3',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
