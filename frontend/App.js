import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import CheckInScreen from './screens/CheckIn';
import HomeScreen from './screens/Home';
import ScheduleScreen from './screens/Schedule';
import ShopScreen from './screens/Shop';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
};

const App = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={NavigationBar} />
      </Stack.Navigator>
  );
};

export default App;
