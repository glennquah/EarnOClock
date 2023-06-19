import React from "react";
import "react-native-gesture-handler";
import HomeScreen from "./screens/Home";
import CheckIn from "./screens/CheckIn";

/* import HomePage from './screens/Home';
import RegisterPage from './screens/Register'; */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="CheckIn"
          component={CheckIn}
          options={{ title: "Check In Page" }}
        />
        {/*  <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register' }} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
