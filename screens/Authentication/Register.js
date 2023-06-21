import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../../components/UI/Container';
import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import TextInputHeading from '../../components/UI/TextInputHeading';
import _TextInput from '../../components/UI/_TextInput';
import {COLORS, SIZES} from '../../constants';
import _Button from '../../components/UI/_Button';

const Register = ({navigation, route}) => {
  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView>
        <Container>
          <HeadingText>Create Account</HeadingText>
          <SubHeadingText>Sign Up</SubHeadingText>
          <View style={styles.inputsContainer}>
            <View style={styles.textInputContainer}>
              <TextInputHeading
                placeholder={'Your Full Name'}
                icon={'person'}
              />
              <_TextInput placeholder="Enter your full name" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputHeading placeholder={'Your Email'} icon={'mail'} />
              <_TextInput placeholder="Enter your email addresss" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputHeading placeholder={'Password'} icon={'lock-closed'} />
              <_TextInput placeholder="**********" password />
            </View>
          </View>
          <_Button>Register</_Button>
          <Text style={styles.textStrip}>
            Already a User? {''}
            <Text style={styles.loginText} onPress={navigateToLoginScreen}>
              Login
            </Text>
          </Text>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  textInputContainer: {
    gap: SIZES.sm,
  },
  inputsContainer: {
    gap: 20,
    paddingBottom: SIZES.xxxl,
  },
  loginText: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
  },
  textStrip: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
  },
});
