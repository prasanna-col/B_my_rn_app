import "react-native-gesture-handler";

import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Alert} from 'react-native'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
// import PushNotification from "./pages/pushNotification";
import FBpushFunc from "./pages/FBpushFunc"
import LayoutAnimation_screen from "./pages/LayoutAnimation";
import GoogleSignIn_screen from "./pages/socialLogin/googleSignIn";
import FBLogin from "./pages/socialLogin/fbLogin";
import Inappmsg from "./pages/Inappmsg";
import AdMob from './pages/AdMob';
import Register from './pages/Register'
import VideoCompress from './pages/VideoCompress'
import EmailInput from './pages/emailInput'

import {AppContextProvider} from "./context"
const Stack = createStackNavigator();




const App = () => {

  const [userName, setUserName] = useState("")
  const validateEmail = (text) => {

    // // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // expression1
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // expression2
    // let reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i; //expression3
  
    if (reg.test(text) === false) {
        Alert.alert("Email is Not Correct");
        return false;
    }
    else {
        Alert.alert("Email is Correct");
        setUserName(text)
        return true
    }
  }
  
  const ProfileData = {
    userName,
    validateEmail
  }

  return (
    <AppContextProvider value={ProfileData}>
       <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EmailInput"
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

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="VideoCompress" component={VideoCompress} />

        <Stack.Screen name="EmailInput" component={EmailInput} />

      </Stack.Navigator>
    </NavigationContainer>
 
    </AppContextProvider>
    );
};

export default App;
