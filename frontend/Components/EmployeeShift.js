import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

// Import the company logo image
import companyLogo from '../assets/starbucks.png';

const EmployeeShift = ({role, name, timing }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftContainer}>

        <View style={styles.textContainer}>
          {/* Display the company branch */}
          <Text style={styles.role}>{role}</Text>

          {/* Display the company role */}
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        {/* Display the date of the shift */}
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

  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 10,
    color: '#666',
  },
  role: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  timing: {
    fontSize: 10,
    color: '#666',
  },
});

export default EmployeeShift;