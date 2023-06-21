import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

const SubHeadingText = ({children}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.screenText}>{children}</Text>
    </View>
  );
};

export default SubHeadingText;

const styles = StyleSheet.create({
  rowContainer: {
    marginBottom: SIZES.xxl,
  },
  screenText: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
