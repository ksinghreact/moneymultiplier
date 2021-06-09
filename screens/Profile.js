import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Profile/Profile.jpg')}
        style={styles.TopBox}
      >
        <View style={styles.boxtop}>
          <View style={styles.avatar}>
            <View style={styles.avcontainer}>
              <ImageBackground
                source={require('../images/avatar.png')}
                style={styles.avimage}
              ></ImageBackground>
            </View>
            <View>
              <Text style={styles.avtext}>7854213458</Text>
              <Text style={{ color: 'white' }}>ID NUMBER:7848756432</Text>
            </View>
            <View style={styles.lv}>
              <Text style={styles.lvtext}>Lv 1</Text>
            </View>
          </View>
        </View>
        <View style={styles.balance}>
          <View style={styles.bcon}>
            <Text style={styles.balanceText}>Current Balance</Text>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                marginTop: 20,
              }}
            >
              $0.00
            </Text>
          </View>
          <View style={styles.bcon}>
            <Text style={styles.balanceText}>Team Benefits</Text>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                marginTop: 20,
              }}
            >
              $0.00
            </Text>
          </View>
          <View style={styles.bcon}>
            <Text style={styles.balanceText}>Equipment Revenue</Text>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                marginTop: 20,
              }}
            >
              $0.00
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.inviteContainer}>
        <Image
          source={require('../images/Profile/invite.jpg')}
          style={{
            width: 90,
            height: 70,
            marginHorizontal: 10,
          }}
        ></Image>
        <Text style={styles.rewardText}>Daily login rewards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Rewards')}
        >
          <Text
            style={{ alignSelf: 'center', marginVertical: 3, color: '#fcbe03' }}
          >
            Check In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RandW}>
        <TouchableOpacity
          style={styles.recharge}
          onPress={() => navigation.navigate('Recharge')}
        >
          <Image
            source={require('../images/Profile/recharge.jpg')}
            style={{ width: 50, height: 70 }}
          ></Image>
          <Text style={{ fontSize: 20, color: '#0065fc' }}>Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.recharge}
          onPress={() => navigation.navigate('Withdraw')}
        >
          <Image
            source={require('../images/Profile/withdraw.jpg')}
            style={{ width: 60, height: 70 }}
          ></Image>
          <Text style={{ fontSize: 20, color: '#0065fc' }}>withdraw</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.extra}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Account');
          }}
        >
          <Text style={styles.textextra}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.textextra}
            onPress={() => navigation.navigate('Mission')}
          >
            Mission
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Bank');
          }}
        >
          <Text style={styles.textextra}>Bank Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Invite')}>
          <Text style={styles.textextra}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.textextra}
            onPress={() => {
              navigation.navigate('About');
            }}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.textextra}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopBox: {
    width: '100%',
    height: 230,
  },

  avatar: {
    height: '30%',
    width: '60%',
    marginVertical: 10,
    marginHorizontal: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avimage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  avtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  avcontainer: {
    width: 70,
    height: 70,
    borderRadius: 50,

    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  lv: {
    paddingHorizontal: 6,
    backgroundColor: '#fcbe03',
    height: 20,
    width: 40,
    borderRadius: 5,
  },
  lvtext: {
    fontWeight: 'bold',
  },
  balance: {
    marginVertical: 10,
    marginTop: 30,
    flexDirection: 'row',
  },
  balanceText: {
    color: 'white',
  },
  bcon: {
    marginLeft: 10,
  },
  inviteContainer: {
    backgroundColor: '#fcbe03',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
  rewardText: {
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 10,
    color: 'white',
  },
  button: {
    marginVertical: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 90,
    height: 25,
    borderRadius: 10,
  },
  RandW: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  recharge: {
    width: '50%',
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  extra: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textextra: {
    fontSize: 20,
    marginVertical: 5,
  },
});
