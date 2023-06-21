import {
  StyleSheet,
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import Container from '../../components/UI/Container';
import {COLORS, SIZES} from '../../constants';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextInputHeading from '../../components/UI/TextInputHeading';
import _TextInput from '../../components/UI/_TextInput';
import _Button from '../../components/UI/_Button';
import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';

// import {Header} from '@react-navigation/native-stack';
const Login = ({navigation}) => {
  const navigateToRegisterScreen = () => {
    navigation.navigate('Register');
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView>
        <Container>
          <HeadingText>Welcome Back</HeadingText>
          <SubHeadingText>Login</SubHeadingText>
          <View style={styles.inputsContainer}>
            <View style={styles.textInputContainer}>
              <TextInputHeading
                placeholder={'Your Email/Username'}
                icon={'person'}
              />
              <_TextInput placeholder="Enter your email addresss" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInputHeading placeholder={'Password'} icon={'lock-closed'} />
              <_TextInput placeholder="Enter your email addresss" password />
            </View>
          </View>
          <Pressable style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
          <_Button>Login</_Button>
          <Text style={styles.newUserText}>
            Are you a new User? {''}
            <Text
              style={styles.forgotPasswordText}
              onPress={navigateToRegisterScreen}>
              Sign up
            </Text>
          </Text>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInputContainer: {
    gap: SIZES.xs,
  },
  inputsContainer: {
    gap: 20,
    paddingBottom: SIZES.xxxl,
  },
  forgotPasswordContainer: {
    marginBottom: SIZES.xxl,
  },
  forgotPasswordText: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary,
  },
  newUserText: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50,
  },
});
