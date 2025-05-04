import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth} from '../../config/Firebase';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <LinearGradient
      colors={['#E0BBE4', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => navigation.navigate('Account')}>
          <Text style={styles.profileText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Menu di tengah layar */}
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Tasks')}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>☑️</Text>
            </View>
            <Text style={styles.menuText}>Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Progres')}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>📈</Text>
            </View>
            <Text style={styles.menuText}>Progres</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol logout di bagian bawah */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
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
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIcon: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#c1bec2',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    color: '#FFF',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    color: '#333',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logoutContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#852FC8',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
