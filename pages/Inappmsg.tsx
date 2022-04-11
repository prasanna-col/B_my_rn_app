import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity,Alert } from "react-native";
import inAppMessaging from "@react-native-firebase/in-app-messaging";
import { TestIds, BannerAd, BannerAdSize, InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType } from '@react-native-firebase/admob';

const Inappmsg = () => {
    const [canReceiveMessage, setCanReceiveMessage] = useState(true);

    const allowToReceiveMessage = async (isAllowed) => {
        setCanReceiveMessage(isAllowed);
        await inAppMessaging().setMessagesDisplaySuppressed(isAllowed);
    };

   

    

    // const showInterstitialAd = () => {
    //     // Create a new instance
    //     const interstitialAd = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

    //     // Add event handlers
    //     interstitialAd.onAdEvent((type, error) => {
    //         if (type === AdEventType.LOADED) {
    //             interstitialAd.show();
    //         }
    //     });

    //     // Load a new advert
    //     interstitialAd.load();
    // }

    // const showRewardAd = () => {
    //     // Create a new instance
    //     const rewardAd = RewardedAd.createForAdRequest(TestIds.REWARDED);

    //     // Add event handlers
    //     rewardAd.onAdEvent((type, error) => {
    //         if (type === RewardedAdEventType.LOADED) {
    //             rewardAd.show();
    //         }

    //         if (type === RewardedAdEventType.EARNED_REWARD) {
    //             console.log('User earned reward of 5 lives');
    //             Alert.alert(
    //                 'Reward Ad',
    //                 'You just earned a reward of 5 lives',
    //                 [
    //                   {text: 'OK', onPress: () => console.log('OK Pressed')},
    //                 ],
    //                 { cancelable: true }
    //               )
    //         }
    //     });

    //     // Load a new advert
    //     rewardAd.load();
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>
                Firebase In-App Messaging
      </Text>
            <View style={styles.innerContainer}>
               
                
                <Text style={styles.simpleText}>
                    User Can Receive Message :{" "}{canReceiveMessage ? "Yes" : "No"}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={() => allowToReceiveMessage(!canReceiveMessage)}
                >
                    <Text style={styles.buttonTextStyle}>{canReceiveMessage ? "Disable Receiving Message" : "Enable Receiving Message"}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default Inappmsg;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        padding: 35,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
    },
    simpleText: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 16,
    },
    buttonTextStyle: {
        color: "white",
        fontWeight: "bold",
    },
    buttonStyle: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        width: "100%",
        marginTop: 16,
    },
    footerHeading: {
        fontSize: 18,
        textAlign: "center",
        color: "grey",
    },
    footerText: {
        fontSize: 16,
        textAlign: "center",
        color: "grey",
    },
});