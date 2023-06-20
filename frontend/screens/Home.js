import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavigationBar from "../Components/NavBar";
import { useNavigation } from "@react-navigation/native";
import ProfileBar from "../Components/ProfileBar";

import HelpButton from'./HelpButton';
import NextShiftButton from'./NextShiftButton';
import ThisWeeksPoints from'./ThisWeeksPoints';
import ProgressBar from'./ProgressBar';

const HomeScreen = () => {

  const totalPoints = 200; // Replace with the total number of points
  const goalPoints = 150; // Replace with the goal number of points
  const progress = 120; // Replace with the current progress

  return (
    <View style={styles.container}>
      <ThisWeeksPoints/>
      <ProgressBar
        totalPoints={totalPoints}
        goalPoints={goalPoints}
        progress={progress}
      />
      <NextShiftButton/>
      <HelpButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


export default HomeScreen;
