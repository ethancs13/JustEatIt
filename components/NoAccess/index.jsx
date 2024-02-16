import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function NoAccess() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.noAccessContainer}>
        <Text style={styles.title}>You need to be logged in to access this page</Text>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccessContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue', // Adjust as needed
    textDecorationLine: 'underline',
  },
});