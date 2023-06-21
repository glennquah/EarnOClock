import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import HelpButton from '../Components/HelpButton';
import NavigationBar from "../Components/NavBar";
import NextShiftButton from '../Components/NextShiftButton';
import ProfileBar from "../Components/ProfileBar";
import ProgressBar from '../Components/ProgressBar';
import ThisWeeksPoints from '../Components/ThisWeeksPoints';

const HomeScreen = () => {
  const navigation = useNavigation();

  const totalPoints = 200; // Replace with the total number of points
  const goalPoints = 150; // Replace with the goal number of points
  const progress = 120; // Replace with the current progress

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} Style = {styles.profileBar} />
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.contentContainer}>
          <ThisWeeksPoints/>
          <ProgressBar
            totalPoints={totalPoints}
            goalPoints={goalPoints}
            progress={progress}
          />
          <NextShiftButton/>
          <HelpButton/>
        </View>
      </View>
      <NavigationBar navigation={navigation} style={styles.navigationBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#D2B48C',
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  profileBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#D2B48C',
  },
});

export default HomeScreen;
