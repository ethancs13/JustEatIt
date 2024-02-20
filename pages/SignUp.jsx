import React from 'react';
import { View } from 'react-native';
import SignUpForm from './SignUpForm';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

export default SignUp;