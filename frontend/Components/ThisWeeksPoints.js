import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ThisWeeksPoints = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require("../assets/hand-gesture.png")} 
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.totalPointsLabel}>This week's stars</Text>
        <Text style={styles.totalPointsValue}>20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#D2B48C",
  },
  leftContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
  },
  rightContainer: {
    flex: 1,
  },
  totalPointsLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  totalPointsValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ThisWeeksPoints;
