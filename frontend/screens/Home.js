import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavigationBar from "../Components/NavBar";
import { useNavigation } from "@react-navigation/native";
import ProfileBar from "../Components/ProfileBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.appBar}>
          {/*<Image
            source={require('./profile-picture.jpg')}
            style={styles.profilePicture}
          />*/}
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.stars}>17 Stars</Text>
        </View>
        <View style={styles.starsBar}>
          <Text style={styles.starsText}>You have 50 / 100 stars</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>
        <View style={styles.listView}>
          <Text style={styles.sectionTitle}>Your Next Shift</Text>
          <Text>Starbucks - Jem</Text>
          <Text>9 June 2023, Friday 12:00 - 19:00 | 7h</Text>
          <Text style={styles.sectionTitle}>Shift That Needs Help</Text>
          <Text>Starbucks Jurong Point</Text>
          <Text>10 June 2023, Saturday 15:00 - 23:00 | 8h</Text>
          <Text>1 barista needed</Text>
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
    backgroundColor: "#fff",
  },
  appBar: {
    // Styles for app bar
  },
  name: {
    // Styles for name
  },
  stars: {
    // Styles for stars
  },
  starsBar: {
    // Styles for stars bar
  },
  starsText: {
    // Styles for stars text
  },
  progressBar: {
    // Styles for progress bar
  },
  progress: {
    // Styles for progress
  },
  listView: {
    // Styles for list view
  },
  sectionTitle: {
    // Styles for section title
  },
});

export default HomeScreen;
