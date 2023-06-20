import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ShiftButton from "../Components/ShiftButton";
import companyLogo from "../assets/starbucks";

const HelpButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.background} />
      <Text style={styles.title}>We Need Help</Text>
      <ShiftButton
        logo={companyLogo}
        branch="JEM"
        role="Starbucks      "
        date="June 21, 2023"
        timing="09:00 - 17:00 | 8h"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Barista</Text>
        <Text style={styles.subText}>1 needed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 5,
    paddingHorizontal: 117,
    borderRadius: 30,
  },
  buttonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    color: "#000000",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: "#FFFFFF", // Set your desired background shape color
    shadowColor: "#555555",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateY: 0 }],
    borderRadius: 30,
  },
});

export default HelpButton;
