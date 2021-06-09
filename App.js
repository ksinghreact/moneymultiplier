import React from 'react';
import AuthStack from './navigation/AuthStack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Invite_friends from './screens/Invite_friends';
import My_team from './screens/My_team';
import Recharge from './screens/Recharge';
import Daily_Rewards from './screens/Daily_Rewards';
import Mission_screen from './screens/Mission_screen';
import Account from './screens/Account';
import Bank from './screens/Bank';
import About from './screens/About';
import Login from './screens/Login';
import Signin from './screens/Signin';
import Invite from './screens/Invite';

const navigator = createStackNavigator({
  Login: Login,
  Home: Home,
  Account: Account,
  Profile: Profile,
  Invite: Invite_friends,
  Team: My_team,
  Recharge: Recharge,
  Rewards: Daily_Rewards,
  Mission: Mission_screen,
  Bank: Bank,
  About: About,
  Signup: Signin,
  Withdraw: Invite,
});
const App = createAppContainer(navigator);

export default function MyStack() {
  return (
    //  <AuthStack/>

    <App />
  );
}
