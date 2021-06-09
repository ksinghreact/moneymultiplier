import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const About = () => {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>Version</Text>
        <AntDesign name="down" size={24} color="#9c9c9c" />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Company</Text>
        <AntDesign name="down" size={24} color="#9c9c9c" />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    marginVertical: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
});
