import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Calendar from "../Components/Calendar";
import NavigationBar from "../Components/NavBar";
import ProfileBar from "../Components/ProfileBar";

// Import the ShiftButton component
import ShiftButton from "../Components/ShiftButton";
import companyLogo from "../assets/starbucks.png";

const ScheduleScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <View style={styles.background}>
        <Calendar style={styles.calendar} />
        <View style={styles.container}>
          <Text style={styles.backgroundShape} />
          <Text style={styles.header}> My Shifts </Text>

          <View style={styles.buttonContainer}>
            {/* Example usage of the ShiftButton component */}
            <ShiftButton
              logo={companyLogo}
              branch="Starbucks - Jem"
              role="Barista"
              date="June 19, 2023"
              timing="09:00 - 17:00 | 8h"
            />

            <ShiftButton
              logo={companyLogo}
              branch="Starbucks - IMM"
              role="Cashier"
              date="June 20, 2023"
              timing="10:00 - 18:00 | 8h"
            />

            <ShiftButton
              logo={companyLogo}
              branch="Starbucks - Jem"
              role="Barista"
              date="June 22, 2023"
              timing="12:00 - 19:00 | 7h"
            />

            {/* Add more ShiftButton components as needed */}
          </View>
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
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D2B48C", // Set the background color to match HomeScreen
  },

  backgroundShape: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: "#FBF7EF", // Set the background shape color to match HomeScreen
    shadowColor: "#555555",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateY: 0 }],
    borderRadius: 30,
  },

  header: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: 20,
    color: "#333333", // Set the text color to match HomeScreen
  },

  container: {
    backgroundColor: "#FBF7EF",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },

  calendar: {
    width: "100%",
    marginBottom: 20,
  },
});

export default ScheduleScreen;
