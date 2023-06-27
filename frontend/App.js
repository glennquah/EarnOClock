import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import CheckInScreen from "./screens/CheckIn";
import CheckOutScreen from "./screens/CheckOut";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import RegisterPage from "./screens/Register";
import ScheduleScreen from "./screens/Schedule";
import ShopScreen from "./screens/Shop";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
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
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="CheckIn"
          component={CheckInScreen}
          options={{ title: "CheckIn" }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOutScreen}
          options={{ title: "CheckOut" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
