import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Invite_friends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Refer a friend</Text>
        <Text>get exciting rewards to your account</Text>
      </View>
      <View style={styles.image}>
        <Image source={require('../images/invite/image3.png')}></Image>
      </View>
      <Text style={{ alignSelf: 'center', fontSize: 25 }}>Invitation Code</Text>
      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>
        a25a23
      </Text>
      <Image
        source={require('../images/invite/image.png')}
        style={styles.barcode}
      ></Image>
      <TouchableOpacity style={styles.copyButton}>
        <Text style={styles.copytext}>Copy Invitation Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Invite_friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'sans-serif',
  },
  image: {
    marginVertical: 10,
  },
  barcode: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  copyButton: {
    height: 40,
    width: 170,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#fcbe03',
    borderRadius: 20,
  },
  copytext: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
