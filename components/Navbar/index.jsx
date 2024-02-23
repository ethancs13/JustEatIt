import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Nav() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navLink}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </Pressable>
      {/* Additional navigation links based on authentication status */}
      {/* Implement logic for Dashboard, Friends, Favorites, and About screens */}
      {/* Implement logic for handling login and signup */}
      <Pressable
        style={styles.navLink}
        onPress={() => navigation.navigate('About')}
      >
        <Text>About</Text>
      </Pressable>
      <Pressable
        style={styles.navLink}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </Pressable>
      <Pressable
        style={styles.navLink}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text>Signup</Text>
      </Pressable>
      {/* Implement logic for logout */}
      <Pressable
        style={styles.navLink}
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
    marginTop: 50,
    height: 60,
  },
  navLink: {
    padding: 10,
  },
});