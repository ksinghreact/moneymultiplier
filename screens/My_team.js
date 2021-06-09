import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

const My_team = ({ navigation }) => {
  return (
    <View>
      <View style={styles.info}>
        <Text>
          Invite friends to register for purchase,lower level member get 7%
          commission for LV1 purchases,4% commission for LV2 purchases and 3%
          commission for LV3 purchases
        </Text>
      </View>
      <View style={styles.middleblock}>
        <View style={styles.size}>
          <Text style={{ color: 'gray' }}>Team Size</Text>
          <Text style={{ fontSize: 20, marginVertical: 20 }}>0</Text>
        </View>
        <View style={styles.verticleLine}></View>
        <View style={styles.total}>
          <Text style={{ color: 'gray' }}>Total purchases taken</Text>
          <Text style={{ fontSize: 20, marginVertical: 20 }}>$0.00</Text>
        </View>
      </View>
      <View style={styles.endblock}>
        <Text style={styles.tier}>Tier 1</Text>
        <ImageBackground
          source={require('../images/team/green.png')}
          style={styles.linearGradient}
        >
          <View style={styles.size}>
            <Text style={styles.text}>Total Investors</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              0
            </Text>
          </View>
          <View style={styles.size}>
            <Text style={styles.text}>Investment amount</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              $0.00
            </Text>
          </View>
        </ImageBackground>
        <Text style={styles.tier}>Tier 2</Text>
        <ImageBackground
          source={require('../images/team/voilet.png')}
          style={styles.linearGradient}
        >
          <View style={styles.size}>
            <Text style={styles.text}>Total Investors</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              0
            </Text>
          </View>
          <View style={styles.size}>
            <Text style={styles.text}>Investment amount</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              $0.00
            </Text>
          </View>
        </ImageBackground>
        <Text style={styles.tier}>Tier 3</Text>
        <ImageBackground
          source={require('../images/team/orenge.png')}
          style={styles.linearGradient}
        >
          <View style={styles.size}>
            <Text style={styles.text}>Total Investors</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              0
            </Text>
          </View>
          <View style={styles.size}>
            <Text style={styles.text}>Investment amount</Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              $0.00
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default My_team;

const styles = StyleSheet.create({
  info: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  middleblock: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 7,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  size: {
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  total: {
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  endblock: {
    marginVertical: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 7,
  },
  linearGradient: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tier: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: 'white',
  },
});
