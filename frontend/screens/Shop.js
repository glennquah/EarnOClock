import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import NavigationBar from "../Components/NavBar";
import { useNavigation } from "@react-navigation/native";
import ProfileBar from "../Components/ProfileBar";

const ShopScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ProfileBar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Hello, welcome to the Shop page!</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default ShopScreen;
