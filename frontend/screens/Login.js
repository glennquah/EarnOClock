import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import UserPool from "../AWS/UserPool";

const Login = () => {
  const navigation = useNavigation();
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add showPassword state

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");

    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
        navigation.navigate('Home');
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });

    const attributeList = [
      {
        Name: "preferred_username",
        Value: username
      },
    ];

    userPool.login(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        navigation.navigate('Home');
      }
    });
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={require('../assets/logo_transparent.png')} style={styles.image} />
        <Text style={styles.smallSignupText}>Login to your account</Text>
        <View style={styles.buttonContainerRow}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Employee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Employer</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          value={organization}
          onChangeText={(text) => setOrganization(text)}
          placeholder="Organization"
          style={styles.input}
        />
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          style={styles.input}
        />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
            onPress={togglePasswordVisibility}
          />
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToRegistration}>
            <Text style={styles.loginButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  smallSignupText: {
    fontSize: 18,
    marginBottom: 30,
  },
  buttonContainerRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 50,
    marginTop: 15,
    padding: 15,
    backgroundColor: '#808080',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginRight: 8,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    marginTop: 15,
    padding: 15,
    backgroundColor: '#006400',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
  },
  loginButton: {
    color: '#006400',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default Login;
