<<<<<<< Updated upstream
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import LoginScreen from "./screens/Login";
import CheckInScreen from "./screens/CheckIn";
import HomeScreen from "./screens/Home";
import ScheduleScreen from "./screens/Schedule";
import ShopScreen from "./screens/Shop";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{ title: "Shop" }}
        />
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ title: "Schedule" }}
        />
        <Stack.Screen
          name="CheckIn"
          component={CheckInScreen}
          options={{ title: "CheckIn" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
}; 
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import RegisterPage from './screens/Register';
import VerifyEmail from './screens/VerifyEmail';

const Stack = createStackNavigator();
>>>>>>> Stashed changes

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register' }} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; */


export default App;
