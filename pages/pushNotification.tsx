import React, { Component } from 'react';
import { View, Text, Alert, TextInput, StyleSheet, Button, Linking, TouchableHighlight, Platform } from 'react-native';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FCM from 'react-native-fcm';

export default class PushNotification extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deviceid: "null",
            url_input: ""
        }
    }

    async componentDidMount() {
        this.getToken()
        this.checkPermission();
        this.createNotificationListeners(); //add this line
    }

    //Remove listeners allocated in createNotificationListeners()
    componentWillUnmount() {
        // this.notificationListener();
        // this.notificationOpenedListener();
    }

    async createNotificationListeners_test() {
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            this.showAlert(title, body);
        });

        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            //process data message
            console.log(JSON.stringify(message));
        });
    }

    showAlert(title, body) {
        Alert.alert(
            title, body,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }



    async createNotificationListeners() {
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            console.log("inside onNotification", notification);
            if (Platform.OS === 'ios') {
                const localNotification = new firebase.notifications.Notification({
                    show_in_foreground: true,
                })
                    .setNotificationId(notification.notificationId)
                    .setTitle(notification.title)
                    .setBody(notification.body)
                    .setSound("default")

                firebase.notifications()
                    .displayNotification(localNotification)
                    .catch(err => console.error(err));

            } else {
                let { title, body } = notification;
                console.log(title, body);
                const channelId = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                    .setDescription('My apps channel');


                // Create the channel
                firebase.notifications().android.createChannel(channelId);
                console.log('channelId', channelId);

                const newNotification = new firebase.notifications.Notification()
                    .android.setChannelId('test-channel')
                    .android.setSmallIcon('ic_launcher')
                    .android.setAutoCancel(true)
                    .android.setCategory(firebase.notifications.Android.Category.Alarm)
                    .android.setPriority(firebase.notifications.Android.Priority.Max)
                    .setNotificationId(notification.notificationId)
                    .setTitle(notification.title)
                    .setBody(notification.body)
                    .setSound('default')
                    .setData(notification._android._notification._data);

                console.log('newNotification', newNotification);
                firebase.notifications().displayNotification(newNotification);
            }
        });


        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            // this.showAlert(title, body); // for display inside the app
        });

        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            // this.showAlert(title, body); // for display inside the app
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            // this.showAlert(title, body); // for display inside the app
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            //process data message
            console.log(JSON.stringify(message));
        });
    }

    async checkPermission() {
        firebase.messaging().hasPermission().then((enabled) => {
            if (enabled) {
                console.log("enabled")
                this.getToken();
            } else {
                console.log("requestPermission")
                this.requestPermission();
            }
        }).catch((error) => {
            console.log("messaging err ->", error)
        })
    }

    async getToken() {

        if (Platform.OS == "android") {
            let fcmToken = await AsyncStorage.getItem('fcmToken');
            console.log("fcmToken1", fcmToken)
            if (!fcmToken) {
                firebase.messaging().getToken().then((fcmData) => {
                    console.log("fcmData", fcmData)
                    if (fcmData) {
                        // user has a device token
                        this.setState({ deviceid: fcmData })
                        AsyncStorage.setItem('fcmToken', fcmData);
                    }
                })
            } else {
                this.setState({ deviceid: fcmToken });
            }
        } else {
            FCM.requestPermissions(); // for iOS
            FCM.getFCMToken().then(token => {
              console.log(token)
              // store fcm token in your server
            });
        }

    }

    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            console.log("User has authorised")
            this.getToken();
        } catch (error) {
            console.log('permission rejected');
        }
    }

    render() {
        return (
            <View style={{}}>
                <Text style={styles.marginstyle}>1. Firebase push notification test!</Text>
                <Text style={styles.marginstyle} numberOfLines={1}>deviceid: {this.state.deviceid}</Text>
                <Text style={styles.marginstyle}>2. Deep linking test</Text>
                <TextInput
                    placeholder={"URL here"}
                    style={{ width: "80%", borderWidth: 1, borderColor: "#000", margin: 10 }}
                    value={this.state.url_input}
                    onChangeText={(val) => { this.setState({ url_input: val }) }}
                />



                <TouchableHighlight
                    style={[styles.marginstyle, { width: "40%", padding: 10, backgroundColor: "lightblue", alignItems: "center", justifyContent: "center" }]}
                    onPress={() => {
                        this.state.url_input == "" ? alert("invalid URL") :
                            Linking.openURL(this.state.url_input)
                    }}
                >
                    <Text>Go to above url</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    marginstyle: {
        margin: 10
    }
})