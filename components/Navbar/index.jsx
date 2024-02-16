import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Nav() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      {/* Additional navigation links based on authentication status */}
      {/* Implement logic for Dashboard, Friends, Favorites, and About screens */}
      {/* Implement logic for handling login and signup */}
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate('About')}
      >
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text>Signup</Text>
      </TouchableOpacity>
      {/* Implement logic for logout */}
      {/* <TouchableOpacity
        style={styles.navLink}
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
    height: 50,
  },
  navLink: {
    padding: 10,
  },
});