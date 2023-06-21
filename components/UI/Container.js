import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Container = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
