import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

const SubHeadingText = ({children, color}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, color && textColor(color)]}>{children}</Text>
    </View>
  );
};

export default SubHeadingText;

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.xxl,
  },
  text: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    lineHeight: 40,
  },
});

const textColor = color => {
  return {
    color: color,
  };
};
