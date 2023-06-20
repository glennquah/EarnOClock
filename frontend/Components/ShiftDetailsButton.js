import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ShiftButton from './ShiftButton';
import companyLogo from './assets/starbucks.png';

const ShiftDetailsButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}/>

      <ShiftButton
          logo={companyLogo}
          branch="1 shift needed"
          role="Barista"
          date="June 19, 2023"
          timing="09:00 - 17:00 | 8h"
      />

      <Text style={styles.text}>Closing Shift | Total Stars (x2) : 16 stars </Text>
      <Text style={styles.text}>Reminder: </Text>
      <Text style={styles.subtext}>- Report 10 Minutes early for Briefing </Text>
      <Text style={styles.subtext}>- 30 Minutes Break + Meals included </Text>
      <Text style={styles.text}>Looking for: </Text>
      <Text style={styles.subtext}>- Minimum 3 months experience </Text>
      <Text style={styles.text}>Job Scope: </Text>
      <Text style={styles.subtext}>- Making of Drinks / Cafe Partner </Text>
      <Text style={styles.text}>Things to bring / Dresscode: </Text>
      <Text style={styles.subtext}>- Apron + Name Tag </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Book Shift</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 350,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'centre',
  },

  subtext: {
    color: '#000000',
    fontSize: 10,
    marginTop: 5,
  },

  text: {
    color: '#000000',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: '#FFFFFF', // Set your desired background shape color
    shadowColor: '#555555',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateY: 0 }],
    borderRadius: 30,
    paddingBottom: 15,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'centre',
    marginTop: 20,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },

  button1: {
    backgroundColor: '#FCF7EF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginHorizontal: 10,
  },

  button2: {
    backgroundColor: '#1D6C10',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },

  buttonText1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonText2: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default ShiftDetailsButton;