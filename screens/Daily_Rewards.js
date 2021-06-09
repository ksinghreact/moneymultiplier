import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Daily_Rewards = () => {
  const [day, setDay] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          Sign in daily for to get daily bonus reward
        </Text>
      </View>
      <View>
        <View style={styles.dayscontainer}>
          <View>
            <Text style={styles.dayname}>Day 1</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 1 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(1)}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
              >
                +1
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.dayname}>Day 2</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 2 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(2)}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginVertical: 3,
                }}
              >
                +1.5
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.dayname}>Day 3</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 3 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(3)}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginVertical: 3,
                }}
              >
                +2.5
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.dayname}>Day 4</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 4 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(4)}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
              >
                +4
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.dayname}>Day 5</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 5 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(5)}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
              >
                +6
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerbox} style={styles.lowerbox}>
          <View>
            <Text style={styles.dayname}>Day 6</Text>
            <TouchableOpacity
              style={[
                styles.daybox,
                day == 6 ? styles.active : styles.notactive,
              ]}
              onPress={() => setDay(6)}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
              >
                +8
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <Text style={styles.dayname}>Day 7</Text>
              <TouchableOpacity
                style={[
                  styles.daybox,
                  day == 7 ? styles.active : styles.notactive,
                ]}
                onPress={() => setDay(7)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    marginVertical: 1,
                  }}
                >
                  +10
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require('../images/Profile/invite.jpg')}
        style={{
          width: '100%',
          height: '70%',
          alignSelf: 'center',
          marginHorizontal: 10,
        }}
      ></ImageBackground>
    </View>
  );
};

export default Daily_Rewards;

const styles = StyleSheet.create({
  active: { backgroundColor: '#ff9f21' },
  notactive: { backgroundColor: '#ffd091' },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    alignSelf: 'center',
    marginVertical: 35,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  dayscontainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  daybox: {
    backgroundColor: '#ffd091',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
  },
  dayname: {
    color: '#949494',
    marginHorizontal: 5,
    alignSelf: 'center',
  },
  lowerbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
