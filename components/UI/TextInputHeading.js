import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../../constants';

const TextInputHeading = ({placeholder, icon}) => {
  return (
    <View style={styles.flexRowContainer}>
      {/* ICON */}
      <Ionicons name={icon} size={SIZES.md} color={COLORS.gray} />
      {/* TEXT */}
      <Text style={styles.inputText}>{placeholder}</Text>
    </View>
  );
};

export default TextInputHeading;

const styles = StyleSheet.create({
  inputText: {
    fontSize: SIZES.md,
    color: COLORS.gray,
  },
  flexRowContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
