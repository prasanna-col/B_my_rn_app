// Import React in our code
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
// Import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, } from 'react-native';
// Import Google Signin
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';
import  {googleCred}  from "../constants/googleCred"
import messaging from "@react-native-firebase/messaging";
const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [DeviceToken, setDeviceToken] = useState("null");
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  useEffect(() => {
    getDeviceToken()
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId: googleCred.Web_client_ID,
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const getDeviceToken = async () => {
    const authStatus = await messaging().requestPermission();
    // console.log("authStatus -->", authStatus)
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      // console.log('Authorization status:', authStatus);
      messaging()
      .getToken()
      .then((token) => {
        var Temp = token;
        setDeviceToken(token);
        // console.log("Device Token", Temp);
      })
      .catch((error) => {
        // console.log("error", error);
      });
    
  }
 
};

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      // console.log('Please Login');
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      // console.log('User Info --> ', info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        // console.log('User has not signed in yet');
      } else {
        alert("Unable to get user's info");
        // console.log("Unable to get user's info");
      }
    }
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      // console.log('User Info --> ', userInfo);

      setUserInfo(userInfo);

      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);


    } catch (error) {
      // console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (
        error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
      ) {
        alert('Play Services Not Available or Outdated');
      } else {
        // console.log("_signIn error", error)
        alert("_signIn error " + error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      // await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

  if (gettingLoginStatus) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Example of Google Sign In in React Native
         </Text>
          <View style={styles.container}>
            {userInfo !== null ? (
              <>
              
              <Text numberOfLines={1} style={[styles.text]}>
              DeviceToken: {DeviceToken}
                </Text>
                <Image
                  source={{ uri: userInfo.user.photo }}
                  style={styles.imageStyle}
                />
                <Text style={[styles.text, { marginTop: 30 }]}>
                  Name: {userInfo.user.name}
                </Text>
                <Text style={styles.text}>
                  Email: {userInfo.user.email}
                </Text>
                <Text style={styles.text}>
                  FamilyName: {userInfo.user.familyName}
                </Text>
                <Text style={styles.text}>
                  GivenName: {userInfo.user.givenName}
                </Text>
                <Text style={styles.text}>
                  Id: {userInfo.user.id}
                </Text>
                <Text numberOfLines={1} style={[styles.text, { marginBottom: 30 }]}>
                  (idToken): {userInfo.idToken}
                </Text>
                {
                  userInfo.scopes.map((val, key) => {
                    return (
                      <Text numberOfLines={2} style={styles.text}>
                        scopes{key + 1}: {val}
                      </Text>
                    )
                  })
                }

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={_signOut}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              </>
            ) : (
                <GoogleSigninButton
                  style={{ width: 312, height: 48 }}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Light}
                  onPress={_signIn}
                />
              )}
          </View>
          <Text style={styles.footerHeading}>
            Google SignIn in React Native
         </Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //  alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text:{

  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: 'contain',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
