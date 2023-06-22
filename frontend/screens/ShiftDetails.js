import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ShiftDetailsButton from '../Components/ShiftDetailsButton';
import companyLogo from './assets/starbucks.png';

const ShiftDetailsPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/starbucksstore.png')} 
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <Image source={companyLogo} style={styles.logo} />
            <View style={styles.textContainer}>
              <Text style={styles.store}> Starbucks </Text>
              <Text style={styles.branch}> JEM </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.pageTitle}>Shift Details</Text>
      <ShiftDetailsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    flex: 1,
    height: 200,
    width: 335,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    opacity: 1,
    marginBottom: 10,
  },
  imageStyle: {
    opacity: 0.5,
  },
  header: {
    alignItems: 'left',
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems: 'centre',
    marginLeft: 20,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'bottom',
  },

  
  branch: {
    fontSize: 15,
    color: '#000000',
  },
  store: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 20,
  },
});

export default ShiftDetailsPage;