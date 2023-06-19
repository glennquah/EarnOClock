import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleShopPress = () => {
    navigation.navigate('Shop');
  };

  const handleSchedulePress = () => {
    navigation.navigate('Schedule');
  };

  const handleCheckInPress = () => {
    navigation.navigate('CheckIn');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={handleHomePress}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleShopPress}>
        <Ionicons name="cart-outline" size={24} color="black" />
        <Text style={styles.label}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleSchedulePress}>
        <Ionicons name="calendar-outline" size={24} color="black" />
        <Text style={styles.label}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={handleCheckInPress}>
        <Ionicons name="checkmark-circle-outline" size={24} color="black" />
        <Text style={styles.label}>Check-in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NavigationBar;
