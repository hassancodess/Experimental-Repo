import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Avatar, Text, TextInput} from 'react-native-paper';
// import {Text} from 'react-native-paper';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Text */}
        <Text style={styles.text}>Profile</Text>
        <View style={styles.avatarContainer}>
          {/* <Image /> */}
          <Avatar.Image
            size={150}
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            }}
            style={styles.avatar}
          />
          <Avatar.Icon size={36} icon="camera" style={styles.cameraPicker} />
        </View>
      </View>
      {/* Text Inputs */}
      <KeyboardAvoidingView style={styles.textInputsContainer}>
        {/* <View style={styles.textInputsContainer}> */}
        <TextInput
          placeholder="Username"
          left={<TextInput.Icon icon="account" />}
          style={styles.textInput}
          activeUnderlineColor="#9BCDD2"
        />
        <TextInput
          placeholder="Date of Birth"
          style={styles.textInput}
          activeUnderlineColor="#9BCDD2"
          left={<TextInput.Icon icon="calendar-range" />}
        />
        {/* Gender */}
        <TextInput
          style={styles.textInput}
          placeholder="Gender"
          activeUnderlineColor="#9BCDD2"
          left={<TextInput.Icon icon="account-supervisor" />}
        />
        {/* Email */}
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#9BCDD2"
          placeholder="Email"
          left={<TextInput.Icon icon="mail" />}
        />
        {/* Password */}
        <TextInput
          style={styles.textInput}
          activeUnderlineColor="#9BCDD2"
          placeholder="Password"
          secureTextEntry
          left={<TextInput.Icon icon="eye" />}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F6F4',
    // backgroundColor: 'red',
  },
  profileContainer: {
    backgroundColor: '#9BCDD2',
    height: '40%',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#F8F6F4',
  },
  textInput: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: 'center',
    elevation: 10,
  },
  cameraPicker: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    backgroundColor: '#FAF0E4',
    zIndex: 20,
  },
  textInputsContainer: {
    // flex: 99,
    // backgroundColor: 'green',
    gap: 20,
    padding: 20,
  },
});
