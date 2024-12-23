/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { images } from '../../constent/images';
import { colors } from '../../constent/colors';

const Registration = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const ref = firestore().collection('users');

  const handleSubmit = async () => {
    if (!name || !email || !password || !phone) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const result = await auth().createUserWithEmailAndPassword(email, password);

      // Add user info to Firestore
      await ref.add({
        phone: phone,
        name: name,
        email: result.user.email,
        uid: result.user.uid,
      });

      // Clear inputs and navigate to Login screen
      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
      Alert.alert('Success', 'User registered successfully');
      navigation.navigate('Login');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'The email address is already in use by another account.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'The email address is invalid.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'Password should be at least 6 characters.');
      } else {
        console.error('Registration error:', error);
        Alert.alert('Error', 'Failed to register. Please try again.');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.loginBox}
      >
        <View style={styles.contentBox}>
          <Text style={styles.title}>Registration to Chatbox</Text>
          <Text style={styles.welcome}>
            Get chatting with friends and family today by signing up for our chat app!
          </Text>

          <View style={styles.orLines}>
            <View style={styles.orLine}></View>
            <Text>OR</Text>
            <View style={styles.orLine}></View>
          </View>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Phone No</Text>
        <TextInput
          placeholder="Enter your phone no"
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          <ImageBackground source={images.BTN_IMG} style={styles.image}>
            <Text style={styles.text}>Register</Text>
          </ImageBackground>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    height: '70%',
    borderRadius: 10,
    paddingVertical: 50,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: colors.primary,
    marginBottom: 30,
    color: colors.black,
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  orLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CDD1D0',
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 10,
  },
  btn: {
    borderRadius: 34,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 48,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Registration;
