import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, firestore } from "../firebase";
import HomeScreen from "../screens/Home";

const LoginScreen = () => {
  const [emailOrUsername, setEmailOrUsername] = useState(""); // Use a single state variable for email or username
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Update the user state
        setTimeout(() => {
          navigation.navigate("Home");
        }, 0);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    firestore
      .collection("users")
      .where("email", "==", emailOrUsername)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // If no email matches, check for username
          firestore
            .collection("users")
            .where("username", "==", emailOrUsername)
            .get()
            .then((querySnapshot) => {
              if (querySnapshot.empty) {
                console.log("User not found!");
              } else {
                // Log in with the matched username
                const userDoc = querySnapshot.docs[0];
                const userData = userDoc.data();
                auth
                  .signInWithEmailAndPassword(userData.email, password)
                  .then(() => {
                    setUser(userData); // Set the user state
                    console.log("User successfully logged in!");
                  })
                  .catch((error) => {
                    console.log("Login error:", error);
                  });
              }
            })
            .catch((error) => {
              console.log("Query error:", error);
            });
        } else {
          // Log in with the matched email
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();
          auth
            .signInWithEmailAndPassword(userData.email, password)
            .then(() => {
              setUser(userData); // Set the user state
              console.log("User successfully logged in!");
            })
            .catch((error) => {
              console.log("Login error:", error);
            });
        }
      })
      .catch((error) => {
        console.log("Query error:", error);
      });
  };

  if (user != null) {
    return <HomeScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/logo_transparent.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Username" // Modify the placeholder
        onChangeText={(text) => setEmailOrUsername(text)}
        value={emailOrUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  imageContainer: {
    width: "90%",
    marginTop: -120,
    marginBottom: 10,
    alignItems: "stretch",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  welcomeText: {
    fontFamily: "SFProExpanded-Semibold", // Replace with the actual font family name of SF Pro
    fontSize: 24,
    marginBottom: 50,
  },
  input: {
    width: "80%",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  buttonContainer: {
    width: "40%",
    marginTop: 15,
    padding: 15,
    backgroundColor: "#59cbbd",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
