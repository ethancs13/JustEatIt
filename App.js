import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import SearchComponent from "./components/SearchComponent";
import Login from './components/LoginForm';
import Signup from './components/SignUpForm';
import "./Styling/header.css"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navbar />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Search"
            component={SearchComponent} 
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            name="Login"
            component={Login} 
          />
          <Stack.Screen
            name="SignUp"
            component={Signup} 
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;