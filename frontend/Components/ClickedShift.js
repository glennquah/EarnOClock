import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Import the company logo image

const ClickedShift = ({ logo, store, branch, date }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.store}>{store}</Text>
          <Text style={styles.branch}>{branch}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '000000',
    padding: 0,
    borderRadius: 20,
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },

  store: {
    marginRight: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },

  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  branch: {
    fontSize: 10,
    color: '#666',
  },

  date: {
    fontSize: 10,
  },

});

export default ClickedShift;