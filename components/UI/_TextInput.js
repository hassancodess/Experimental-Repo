import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const _TextInput = ({placeholder, password}) => {
  const [passwordIcon, setPasswordIcon] = useState(password && 'eye-off');

  const handleIconPress = () => {
    if (passwordIcon == 'eye-off') {
      setPasswordIcon('eye');
    } else {
      setPasswordIcon('eye-off');
    }
  };
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray2}
      style={styles.textInput}
      outlineStyle={{display: 'none'}}
      underlineStyle={{display: 'none'}}
      cursorColor={COLORS.gray2}
      activeUnderlineColor="transparent"
      right={
        password && (
          <TextInput.Icon
            icon={passwordIcon}
            size={SIZES.lg}
            color={COLORS.white}
            onPress={handleIconPress}
          />
        )
      }
      secureTextEntry={passwordIcon == 'eye-off' ? true : false}
    />
  );
};

export default _TextInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray2,
    borderWidth: 1.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
