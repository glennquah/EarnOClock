import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate("Shop")}
      >
        <Icon name="cart" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate("Schedule")}
      >
        <Icon name="calendar" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarButton}
        onPress={() => navigation.navigate("CheckIn")}
      >
        <Icon name="checkmark-done" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Check-In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around", // Space the buttons evenly
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 8,
  },
  bottomBarButton: {
    flex: 1, // Equal flex distribution for all buttons
    paddingVertical: 8,
    alignItems: "center",
  },
  bottomBarButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginBottom: 4,
  },
});
export default NavBar;
