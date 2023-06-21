import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';

const _Button = ({children}) => {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default _Button;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    elevation: 10,
    shadowColor: COLORS.primary,
  },
  buttonText: {
    fontSize: SIZES.lg,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
