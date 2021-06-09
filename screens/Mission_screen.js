import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Mission_screen = () => {
  const [box, setBox] = useState();
  return (
    <View>
      <View style={styles.heading}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Total People : 0
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.box, box == 1 ? styles.active : styles.notactivebox]}
        onPress={() => setBox(1)}
      >
        <View style={styles.lefttext}>
          <Text>Invited 1 valid member</Text>
          <Text style={box == 1 ? styles.activetext : styles.text}>
            Task Reward $25
          </Text>
        </View>
        <View style={styles.middletext}>
          <Text>0/1</Text>
          <View style={styles.shadow}></View>
        </View>
        <View style={styles.outercircle}>
          <View
            style={[
              styles.innercircle,
              box == 1 ? styles.active : styles.notactivecircle,
            ]}
          >
            <Text style={box == 1 ? styles.activerecived : styles.recived}>
              Recieved
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* box 2 */}
      <TouchableOpacity style={styles.box}>
        <View style={styles.lefttext}>
          <Text>Invited 1 valid member</Text>
          <Text style={styles.text}>Task Reward $25</Text>
        </View>
        <View style={styles.middletext}>
          <Text>0/1</Text>
          <View style={styles.shadow}></View>
        </View>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}>
            <Text style={{ fontSize: 10 }}>Recived</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* box 3*/}
      <TouchableOpacity style={styles.box}>
        <View style={styles.lefttext}>
          <Text>Invited 1 valid member</Text>
          <Text style={styles.text}>Task Reward $25</Text>
        </View>
        <View style={styles.middletext}>
          <Text>0/1</Text>
          <View style={styles.shadow}></View>
        </View>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}>
            <Text style={{ fontSize: 8 }}>Recieved</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* box 4 */}
      <TouchableOpacity style={styles.box}>
        <View style={styles.lefttext}>
          <Text>Invited 1 valid member</Text>
          <Text style={styles.text}>Task Reward $25</Text>
        </View>
        <View style={styles.middletext}>
          <Text>0/1</Text>
          <View style={styles.shadow}></View>
        </View>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}>
            <Text style={{ fontSize: 10 }}>Recived</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* box 5 */}
      <TouchableOpacity style={styles.box}>
        <View style={styles.lefttext}>
          <Text>Invited 1 valid member</Text>
          <Text style={styles.text}>Task Reward $25</Text>
        </View>
        <View style={styles.middletext}>
          <Text>0/1</Text>
          <View style={styles.shadow}></View>
        </View>
        <View style={styles.outercircle}>
          <View style={styles.innercircle}>
            <Text style={{ fontSize: 10 }}>Recived</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Mission_screen;

const styles = StyleSheet.create({
  active: { backgroundColor: '#ff9f21' },
  notactivebox: { backgroundColor: 'white' },
  notactivecircle: { backgroundColor: '#e8e8e8' },
  heading: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  box: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  lefttext: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  middletext: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  shadow: {
    width: 80,
    height: 5,
    backgroundColor: '#e8e8e8',
    borderRadius: 50,
    marginTop: 5,
  },
  innercircle: {
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  outercircle: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 10,
    color: '#1255ff',
  },
  activetext: {
    marginTop: 10,
    color: 'white',
  },

  otheractivetext: { color: 'white' },
  recived: {
    fontSize: 9,
  },
  activerecived: { color: 'white', fontSize: 9 },
});
