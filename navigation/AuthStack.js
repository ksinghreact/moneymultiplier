import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
// import Register from '../screens/Register';
import About from '../screens/About';
import Welcome from '../screens/Welcome';

const RootStack = createStackNavigator();

const AuthStack = ({ navigation }) => (
  <NavigationContainer>
    <RootStack.Navigator>

      {/* <RootStack.Screen name="About" component={About}
        // Hiding header for Welcome Screen
        options={{ headerShown: false }}
      /> */}

      {/* <RootStack.Screen name="Welcome" component={Welcome}
        // Hiding header for Welcome Screen
        options={{ headerShown: false }}
      /> */}

      <RootStack.Screen name="Login" component={Login}
        // Hiding header for Options Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#307ecc',
            shadowColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitle: false
        }}
      />

      {/* <RootStack.Screen name="Register" component={Register}
      // Hiding header for Options Screen
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#307ecc',
          shadowColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitle: false
      }}
    />  */}

    </RootStack.Navigator>
  </NavigationContainer>
);

export default AuthStack;