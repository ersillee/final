import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tasks = () => {
  return (
    <LinearGradient
      colors={['#E0BBE4', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.header}>
        {/* You can replace this with a proper back button component if needed */}
        <View style={{width: 24}} />
        <Text style={styles.headerText}>Tasks</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      <View style={styles.content}>
        <View style={styles.taskCard}>
          <View style={styles.imageContainer}>
            {/* Make sure the path to your image is correct */}
            <Image
              source={require('./assets/clipboard_with_checks.png')}
              style={styles.taskImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.taskTitle}>Your Tasks</Text>
          <Text style={styles.taskDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Adjust if you have a status bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
  },
  imageContainer: {
    backgroundColor: '#F0F4C3', // Approximate background color
    borderRadius: 8,
    padding: 30,
    marginBottom: 15,
  },
  taskImage: {
    width: 80,
    height: 80,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Tasks;
