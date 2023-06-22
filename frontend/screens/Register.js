import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import userPool from "../AWS/UserPool";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const attributeList = [
      {
        Name: "name",
        Value: username,
      },
      {
        Name: "preferred_username",
        Value: username,
      },
      {
        Name: "email",
        Value: email,
      },
      {
        Name: "phone_number",
        Value: phoneNumber,
      },
      {
        Name: "address",
        Value: address,
      },
    ];

    userPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Registration successful, navigate to the email verification screen
        navigation.navigate("Home");
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/logo_transparent.png")}
          style={styles.image}
        />
        <Text style={styles.smallSignupText}>Sign up for an account</Text>
        <View style={styles.buttonContainerRow}>
          <TouchableOpacity style={[styles.button, styles.firstButton]} onPress={() => {}}>
            <Text style={styles.buttonText}>  Employee  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.firstButton]} onPress={() => {}}>
            <Text style={styles.buttonText}>  Employer  </Text>
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
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Phone Number"
          style={styles.input}
        />
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address"
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
            onPress={togglePasswordVisibility}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            style={styles.passwordInput}
          />
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
            onPress={toggleConfirmPasswordVisibility}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2B48C",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 150,
    marginBottom: 10,
    resizeMode: "contain",
  },
  smallSignupText: {
    fontSize: 18,
    marginBottom: 30,
  },
  buttonContainerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  button: {
    height: 50,
    marginTop: 15,
    padding: 15,
    backgroundColor: "#808080",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: '35%',
  },
  firstButton: {
    marginRight: 20,
  },
  secondButton: {
    marginLeft: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 50,
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    height: 10,
    marginRight: 8,
  },
  buttonContainer: {
    width: "80%",
    height: 50,
    marginTop: 15,
    padding: 15,
    backgroundColor: "#006400",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
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
    color: "#006400",
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default Register;
