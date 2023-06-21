import React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../../components/UI/Container';
import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import TextInputHeading from '../../components/UI/TextInputHeading';
import _TextInput from '../../components/UI/_TextInput';
import _Button from '../../components/UI/_Button';
import {COLORS, SIZES} from '../../constants';
const ForgotPassword = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView>
        <Container>
          {/* <Text>asdasdjkashdjk</Text> */}
          <HeadingText>Reset Password</HeadingText>
          <SubHeadingText color={COLORS.gray2}>
            Confirm your email and we'll send the instructions.
          </SubHeadingText>
          {/* <Seperator /> */}
          <View style={styles.seperator} />
          <View style={styles.textInputContainer}>
            <TextInputHeading
              placeholder={'Your Email/Username'}
              icon={'person'}
            />
            <_TextInput placeholder="Enter your email addresss" />
          </View>
          <View style={styles.seperator} />
          <_Button>Send Instructions</_Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  seperator: {
    marginTop: 80,
  },
  textInputContainer: {
    gap: SIZES.sm,
  },
});
