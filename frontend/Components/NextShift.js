import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShiftButton from "./ShiftButton";
import companyLogo from "./assets/starbucks.png";

const NextShiftButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.background}/>
      <Text style={styles.title}>Next Shift</Text>
      <ShiftButton
          logo={companyLogo}
          branch="Starbucks - JEM"
          role="Barista"
          date="June 19, 2023"
          timing="09:00 - 17:00 | 8h"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: "#FFFFFF", 
    shadowColor: "#555555",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateY: 0 }],
    borderRadius: 30,
  },
});

export default NextShiftButton;