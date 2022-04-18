import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
// import PushNotification from "./pages/pushNotification";
import FBpushFunc from "./pages/FBpushFunc"
import LayoutAnimation_screen from "./pages/LayoutAnimation";
import GoogleSignIn_screen from "./pages/socialLogin/googleSignIn";
import FBLogin from "./pages/socialLogin/fbLogin";
import Inappmsg from "./pages/Inappmsg";
import AdMob from './pages/AdMob';

import Profile from './pages/Profile'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: "First Page", //Set Header Title
            headerStyle: {
              backgroundColor: "#f4511e", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen name="SecondPage" component={SecondPage} />

        {/* <Stack.Screen name="PushNotification" component={PushNotification} /> */}
        <Stack.Screen name="FBpushFunc" component={FBpushFunc} />
        <Stack.Screen name="LayoutAnimation_screen" component={LayoutAnimation_screen} />

        <Stack.Screen name="GoogleSignIn_screen" component={GoogleSignIn_screen} />

        <Stack.Screen name="FBLogin" component={FBLogin} />

        <Stack.Screen name="Inappmsg" component={Inappmsg} />
        
        <Stack.Screen name="AdMob" component={AdMob} />

        <Stack.Screen name="Profile" component={Profile} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
