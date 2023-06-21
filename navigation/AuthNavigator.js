import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export default AuthNavigator;
