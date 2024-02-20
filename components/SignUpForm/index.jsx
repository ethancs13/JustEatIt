import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignUpForm = ({ navigation }) => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  const handleInputChange = (name, value) => {
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setErrors({
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
    });

    let hasErrors = false;

    if (!userFormData.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usernameError: "Invalid - Must have a username.",
      }));
      hasErrors = true;
    }

    if (!userFormData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "Invalid - Must have a username.",
      }));
      hasErrors = true;
    }

    if (userFormData.password !== userFormData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "Passwords do not match",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      const { data } = await createUser({
        variables: { ...userFormData },
      });

      Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
      alert("An error occurred while registering the user.");
    }

    setUserFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  };

  return (
    <View style={styles.formContainer}>
      <Text>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={userFormData.username}
          onChangeText={(text) => handleInputChange("username", text)}
          autoCapitalize="none"
          keyboardType="default"
          enterKeyHint="next"
        />
        {errors.usernameError && (
          <Text style={styles.errorMessage}>{errors.usernameError}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={userFormData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          enterKeyHint="next"
        />
        {errors.passwordError && (
          <Text style={styles.errorMessage}>{errors.passwordError}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={userFormData.confirmPassword}
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          enterKeyHint="done"
        />
        {errors.confirmPasswordError && (
          <Text style={styles.errorMessage}>{errors.confirmPasswordError}</Text>
        )}
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text>Sign Up</Text>
      </Pressable>
      <View style={styles.flexRow}>
        <Text>Already have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = {
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: "red",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    paddingLeft: 5
  },
};

export default SignUpForm;
