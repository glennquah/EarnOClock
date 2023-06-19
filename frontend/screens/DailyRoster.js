import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calendar from './components/Calendar';


// Import the ShiftButton component
import EmployeeShift from './components/EmployeeShift';
import ClickedShift from './components/ClickedShift';
import companyLogo from './assets/starbucks.png';

export default function App() {
  return (
    <View style={styles.background}> 
    <Calendar style= {styles.calendar}> </Calendar>
    <View style={styles.container}>
      <View style={styles.backgroundShape}> </View>
      <View style= {styles.header}> Daily Roster </View>
      
      <ClickedShift
        logo = {companyLogo}
        store = "Starbucks"
        branch = "JEM"
        date = "19 June 2023"
        />

      <View style={styles.buttonContainer}>
        {/* Example usage of the ShiftButton component */}
        <EmployeeShift
          role="Store Manager"
          name= "Glenn Quah"
          timing="09:00 - 17:00 | 8h"
        />

        <EmployeeShift
          role="Cashier"
          name= "Koo Jay-Lynn"
          timing="09:00 - 17:00 | 8h"
        />

        <EmployeeShift
          role= "Barista"
          name= "Koh Xin Ning"
          timing="09:00 - 17:00 | 8h"
        />

        {/* Add more ShiftButton components as needed */}
      </View>
    </View>
    </View>
  );
}