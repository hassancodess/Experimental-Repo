import React from 'react';
// Navigation
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
// Screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const icons = {
  Home: 'home',
  Profile: 'person',
};

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return <Ionicons name={icons[route.name]} size={24} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
