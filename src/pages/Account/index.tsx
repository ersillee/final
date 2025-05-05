import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Account = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#ca77ed', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Account</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      <View style={styles.content}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.accountButton} onPress={() => {}}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>👤</Text>
            </View>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.accountButton}
            onPress={() => navigation.navigate('ChangePassword')}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🔑</Text>
            </View>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  accountButton: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
    color: '#FFF',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#9400D3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  logoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Account;
