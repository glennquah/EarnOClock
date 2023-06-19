import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

// Import the company logo image
import companyLogo from '../assets/starbucks.png';

const ShiftButton = ({ logo, branch, role, date, timing }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftContainer}>
        {/* Display the company logo */}
        <Image source={logo} style={styles.logo} />

        <View style={styles.textContainer}>
          {/* Display the company branch */}
          <Text style={styles.role}>{role}</Text>

          {/* Display the company role */}
          <Text style={styles.branch}>{branch}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        {/* Display the date of the shift */}
        <Text style={styles.date}>{date}</Text>

        {/* Display the timing of the shift and number of hours */}
        <Text style={styles.timing}>{timing}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eaeaea',
    padding: 20,
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
  role: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  timing: {
    fontSize: 10,
    color: '#666',
  },
});

export default ShiftButton;