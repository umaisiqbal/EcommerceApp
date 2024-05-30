import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
const stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
         <stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
          <stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
         <stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
