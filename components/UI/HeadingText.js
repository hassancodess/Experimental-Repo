import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';

const HeadingText = ({children}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{children}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: SIZES.xxxl,
    paddingBottom: SIZES.xxxl * 2,
  },
  headingText: {
    fontSize: SIZES.xxxl,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
