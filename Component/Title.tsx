import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>User List</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
