import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Progres = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#E0BBE4', '#FFFFFF']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Replace with your back icon */}
          <Text style={styles.backButton}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Progres</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      <View style={styles.content}>
        <View style={styles.progressCard}>
          {/* Replace with your actual progress chart/image */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartIcon}>📈</Text>
          </View>
          <Text style={styles.progressTitle}>Learning Progress</Text>
          <Text style={styles.progressDescription}>
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
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  progressCard: {
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
  chartContainer: {
    backgroundColor: '#E0F7FA', // Light blue background for chart
    borderRadius: 8,
    padding: 30,
    marginBottom: 15,
  },
  chartIcon: {
    fontSize: 60,
    color: '#00ACC1', // Teal color for the chart icon
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Progres;
