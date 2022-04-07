import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import messaging from "@react-native-firebase/messaging";

export default function FBPushFunc({ }) {

    const [DeviceToken, setDeviceToken] = useState("null");

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
    });

    useEffect(() => {
        requestUserPermission();
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log("remoteMessage", remoteMessage)
            Alert.alert('A new FCM message arrived!', remoteMessage.notification.title + '\n' + remoteMessage.notification.body);
        });
        return unsubscribe;
    }, []);

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
            getFcmToken()
            console.log('Authorization status:', authStatus);
        }
    }

    const getFcmToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log(fcmToken);
            setDeviceToken(fcmToken)
            console.log("Your Firebase Token is:", fcmToken);
        } else {
            console.log("Failed", "No token received");
        }
    }

    return (
        <View>
            <Text style={styles.marginstyle}>Firebase push notification test in hook (functional component)!</Text>
            <Text style={styles.marginstyle} numberOfLines={1}>DeviceToken: {DeviceToken}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    marginstyle: {
        margin: 10
    }
})
