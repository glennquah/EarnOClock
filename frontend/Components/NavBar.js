<<<<<<< Updated upstream
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

=======
import * as React from 'react';
import { StyleSheet, View } from 'react-native';


import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//screens
import CheckInScreen from '../screens/CheckIn';
import HomeScreen from '../screens/Home';
import ScheduleScreen from '../screens/Schedule';
import ShopScreen from '../screens/Shop';
>>>>>>> Stashed changes

const Tab = createBottomTabNavigator();

const NavBar = ({ navigation }) => {
    return (
      <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Shop')}>
        <Icon name="cart" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Schedule')}>
        <Icon name="calendar" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('CheckIn')}>
        <Icon name="checkmark-done" size={24} style={styles.icon} />
        <Text style={styles.bottomBarButtonText}>Check-In</Text>
      </TouchableOpacity>
    </View>
    );
};
/* 
const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Shop') {
            iconName = 'cart';
          } else if (route.name === 'Schedule') {
            iconName = 'calendar';
          } else if (route.name === 'CheckIn') {
            iconName = 'checkmark-done';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="CheckIn" component={CheckInScreen} />
    </Tab.Navigator>
  );
}; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space the buttons evenly
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  bottomBarButton: {
    flex: 1, // Equal flex distribution for all buttons
    paddingVertical: 8,
    alignItems: 'center',
  },
  bottomBarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 4,
  },
});

export default NavBar;
