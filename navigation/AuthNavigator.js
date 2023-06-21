import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';
import ForgotPassword from '../screens/Authentication/ForgotPassword';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
  );
};

export default AuthNavigator;
