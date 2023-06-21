import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../Components/NavBar";
import ProfileBar from "../Components/ProfileBar";
import { Ionicons } from "@expo/vector-icons";

const starbucksSource = require("../assets/starbucks.png");

const CheckInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Background screen */}
        <View style={styles.background} />

        {/* Background text */}
        <View style={styles.backgroundTextContainer}>
          <View style={styles.backgroundTextRow}>
            <Ionicons name="wifi" size={24} color="black" />
            <Text style={styles.backgroundText}>
              You are connected to the work Wi-Fi
            </Text>
          </View>
          <View style={styles.backgroundTextRow}>
            <Ionicons name="star" size={24} color="gold" />
            <Text style={styles.backgroundText}>
              You will earn 7 stars for this shift
            </Text>
          </View>
          <View style={styles.backgroundTextRow}>
            <Ionicons name="star" size={24} color="gold" />
            <Text style={styles.backgroundText}>
              You are an early bird! ( + 1 Star )
            </Text>
          </View>
        </View>

        {/* Rectangle on bottom */}
        <View style={styles.rectangle}>
          <View style={styles.smallRectangle}>
            <Text style={styles.headerText}>Current Shift</Text>
            <View style={styles.rowContainer}>
              <View style={styles.imageContainer}>
                <Image source={starbucksSource} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.rowText}>Starbucks</Text>
                <Text style={styles.rowText}>Jem</Text>
              </View>
              <View style={styles.rightTextContainer}>
                <Text style={styles.rightText}>21/04/2023</Text>
                <Text style={styles.rightText}>12:00 - 19:00</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CheckOut")}
          >
            <Text style={styles.buttonText}>CHECK IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#D2B48C",
  },
  backgroundTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingTop: 30,
  },
  backgroundTextRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  backgroundText: {
    fontSize: 18,
    color: "black",
    marginLeft: 15,
  },
  rectangle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 45,
    borderRadius: 100,
    backgroundColor: "#00704A", // Starbucks green color
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  smallRectangle: {
    width: "90%",
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rowText: {
    marginLeft: 5,
    fontSize: 16,
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  imageContainer: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: "white", // Placeholder background color
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  rightTextContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default CheckInScreen;
