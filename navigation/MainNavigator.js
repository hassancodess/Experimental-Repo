import React from 'react';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();
// Navigators
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Authentication" component={AuthNavigator} />
        <Screen name="Dashboard" component={DashboardNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
