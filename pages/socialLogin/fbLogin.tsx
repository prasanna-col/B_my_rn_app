import React, { useEffect, useState } from 'react';

import { View, StyleSheet, Text, Alert, Image } from 'react-native';

import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export default function FBLogin({ }) {

    const [user_name, setuser_name] = useState("");
    const [avatar_url, setavatar_url] = useState("");
    const [avatar_show, setavatar_show] = useState(false);

    const get_Response_Info = (error, result) => {
        if (error) {
            Alert.alert('Error fetching data: ' + error.toString());
        } else {

            setuser_name('Welcome' + ' ' + result.name);

            setavatar_url(result.picture.data.url);

            setavatar_show(true)

            console.log(result);

        }
    }
    const onLogout = () => {

        setuser_name(null);

        setavatar_url(null);

        setavatar_show(false)

    }

    return (
        <View style={styles.container}>


            {avatar_url ?
                <Image
                    source={{ uri: avatar_url }}
                    style={styles.imageStyle} /> : null}

            <Text style={styles.text}> {user_name} </Text>

            <LoginButton
                readPermissions={['public_profile']}
                onLoginFinished={(error, result) => {
                    if (error) {
                        console.log(error.message);
                        console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                        console.log('login is cancelled.');
                    } else {
                        AccessToken.getCurrentAccessToken().then(data => {
                            console.log(data.accessToken.toString());

                            const processRequest = new GraphRequest(
                                '/me?fields=name,picture.type(large)',
                                null,
                                get_Response_Info
                            );
                            // Start the graph request.
                            new GraphRequestManager().addRequest(processRequest).start();

                        });
                    }
                }}
                onLogoutFinished={onLogout}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 20
    },

    imageStyle: {

        width: 200,
        height: 300,
        resizeMode: 'contain'

    }
});
