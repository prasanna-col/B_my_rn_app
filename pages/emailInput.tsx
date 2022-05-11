// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState } from 'react';
import { SafeAreaView, TextInput, View,StyleSheet, Text, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from './assets/Colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EmailInput = ({ navigation }) => {
    const [email, setEmail] = useState('');

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
        }
    }

    const on_submit = () =>{
        validateEmail(email)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>

            <View style={styles.feedback_view}>
                <TextInput
                testID="email-input"
                    style={{
                        margin: 15,
                        height: 40,
                        borderColor: '#7a42f4',
                        borderWidth: 1
                    }}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(text) => { setEmail(text) }}
                    value={email}
                />
            </View>

            <View style={styles.orderBtnView}>
                <TouchableOpacity style={styles.order_btn}
                testID="submit-btn"
                    onPress={() => { validateEmail(email) }}
                >
                    <Text style={styles.order_txt}>Sumbit</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    feedback_view: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors.white },
    feedback_txt: { fontSize: 12, color: Colors.gray },
    orderBtnView: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.white, marginBottom: 20 },
    order_btn: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.yellow, height: 50, marginHorizontal: 20, borderRadius: 5, width: "90%", flexDirection: "row" },
    order_txt: { fontSize: 16, color: Colors.black, paddingLeft: 10, fontWeight: "500" },
})

export default EmailInput;
