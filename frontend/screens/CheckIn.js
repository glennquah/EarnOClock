import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../Components/NavBar';

const CheckInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, welcome to the Check-In page!</Text>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CheckInScreen;
