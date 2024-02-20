import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = ({ navigation }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loginUser] = useMutation(LOGIN);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error, 'Error occurred with user login.');
      setError('Oops 🤔, Please check your username or password.');
    }

    setFormData({ username: '', password: '' });
  };

  return (
    <View style={styles.formContainer}>
      <Text>Login</Text>
      <View style={styles.inputContainer}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={formData.username}
          onChangeText={(text) => handleInputChange('username', text)}
          autoCapitalize="none"
          inputMode="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          autoCapitalize="none"
          inputMode="default"
          secureTextEntry={true}
        />
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <View>
        <Text>
          Don't have an account?{' '}
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign Up</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

const styles = {
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: 'red',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
};

export default LoginForm;