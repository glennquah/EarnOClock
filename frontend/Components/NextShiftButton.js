import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import companyLogo from "../assets/starbucks.png";
import ShiftButton from "./ShiftButton";

const NextShiftButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.background} />
      <Text style={styles.title}>Next Shift</Text>
      <ShiftButton
        logo={companyLogo}
        branch="Starbucks - JEM"
        role="Barista"
        date="June 19, 2023"
        timing="09:00 - 17:00 | 8h"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CHECK IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  button: {
    backgroundColor: "#00704A",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  background: {
    borderRadius: 30,
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

export default NextShiftButton;
