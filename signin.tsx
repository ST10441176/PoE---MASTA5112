import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    Alert.alert('Success', 'Sign up successful!');

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignUp} />

      <Text style={styles.loginLink}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  loginLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;