import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as React from 'react';

export default function Login({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require('../images/bg2.png')}
        style={{ height: '100%', width: '100%' }}
      >
        <ImageBackground
          source={require('../images/bg.jpg')}
          style={{ height: '90%', width: '100%' }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 30,
              marginLeft: 20,
              marginTop: 50,
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 10,
              marginLeft: 20,
              marginTop: 2,
            }}
          >
            we make it easy for you to invest and earn money.
          </Text>
        </ImageBackground>
      </ImageBackground>

      <View
        style={{
          height: 320,
          width: 300,
          backgroundColor: 'white',
          position: 'absolute',
          marginLeft: 30,
          marginTop: 130,
        }}
      >
        <Image
          source={require('../images/ll.jpeg')}
          style={{ height: '15%', width: '50%', marginLeft: '25%' }}
        />

        <TextInput placeholder="Username" style={Style.textstyle} />

        <TextInput placeholder="Password" style={Style.textstyle} />

        <Text style={{ marginTop: 5, paddingLeft: 10 }}>Forgot Password?</Text>

        <TouchableOpacity
          style={Style.button1}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>Sign Up</Text>
        </TouchableOpacity>

        <Image
          source={require('../images/bg3.png')}
          style={{ height: 230, width: 350, marginTop: 75 }}
        />
      </View>
    </View>
  );
}

var Style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#4E59E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sform: {
    height: 40,
    width: 80,
    position: 'relative',
    display: 'flex',
    marginTop: 200,
    borderRadius: 10,
    backgroundColor: '#F8F9FB',
  },
  button: {
    // alignItems: "center",
    backgroundColor: '#F8994F',
    position: 'absolute',
    borderRadius: 5,
    marginTop: 200,
    marginLeft: 155,
    padding: 10,
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#F8994F',
    position: 'absolute',
    borderRadius: 5,
    marginTop: 200,
    marginLeft: 55,
    padding: 10,
  },

  countContainer: {
    alignItems: 'center',
    padding: 10,
  },

  textstyle: {
    borderBottomWidth: 0.5,
    color: 'grey',
    borderBottomColor: '#787674',
    marginTop: 25,
    paddingLeft: 10,
  },

  lock: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginLeft: 15,
  },
});
