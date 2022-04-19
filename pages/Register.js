// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Image, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './assets/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
const Style_path = require('./assets/Styles');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const downIcon = require("./assets/img/downIcon.png")
const uploadIcon = require("./assets/img/upload.png")
const white_bg = require("./assets/img/white_bg.jpeg")


const Register = ({ navigation }) => {
    const [Firstname, setFirstname] = useState('AboutReact');
    const [Lastname, setLastname] = useState('AboutReact');
    const [PhoneNum, setPhoneNum] = useState('9988239823');
    const [BrandName, setBrandName] = useState('ABC Brand');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar hidden />
            <View style={Style_path.img_view}>
                <Image source={white_bg} style={Style_path.top_img} />
            </View>

            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={[Colors.sec_pink, Colors.pri_pink]}
                style={Style_path.tab_style}>
                <View style={Style_path.tab_view}>
                    <View style={Style_path.tab_left}>

                        <View style={Style_path.tab_left_in}>
                            <Text style={Style_path.tab_txt}>LOGIN</Text>
                        </View>
                    </View>
                    <View style={Style_path.tab_ryt}>

                        <View style={Style_path.tan_ryt_in}>
                            <Text style={Style_path.tab_txt}>SIGN UP</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>


            <ScrollView style={Style_path.scroll_view}>
                <View style={Style_path.main_view_style}>
                    <Text style={Style_path.head_text}>First Name</Text>
                    <TextInput
                        style={Style_path.text_input}
                        onChangeText={(text) => { setFirstname(text) }}
                        value={Firstname}
                    />
                </View>

                <View style={Style_path.main_view_style}>
                    <Text style={Style_path.head_text}>Last Name</Text>
                    <TextInput
                        style={Style_path.text_input}
                        onChangeText={(text) => { setLastname(text) }}
                        value={Lastname}
                    />
                </View>

                <View style={Style_path.dob_main_view}>
                    <View style={Style_path.dob_txt_view1}>
                        <Text style={Style_path.head_text}>Date Of Brith</Text>
                    </View>

                    <View style={Style_path.dob_txt_view2}>
                        <Text style={Style_path.dob_txt}>   DD/MM/YYYY </Text>
                    </View>

                </View>

                <View style={Style_path.main_view_style}>
                    <Text style={Style_path.head_text}>Phone Number</Text>

                    <View style={Style_path.ph_main_view}>
                        <View style={Style_path.ph_code_view}>
                            <Text style={Style_path.code_txt}>+91</Text>
                        </View>
                        <View style={Style_path.ph_num_view}>
                            <TextInput
                                style={Style_path.text_input}
                                onChangeText={(text) => { setPhoneNum(text) }}
                                value={PhoneNum}
                            />
                        </View>


                    </View>
                </View>

                <View style={Style_path.main_view_style}>
                    <Text style={Style_path.head_text}>Select Brand Name</Text>

                    <View style={Style_path.ph_main_view}>
                        <View style={Style_path.brand_txt_view}>
                            <TextInput
                                style={Style_path.brand_input}
                                onChangeText={(text) => { setBrandName(text) }}
                                value={BrandName}
                            />
                        </View>
                        <View style={Style_path.brand_icon_view}>
                            <Image source={downIcon} style={Style_path.brand_icon} />
                        </View>

                    </View>

                </View>
                <View style={Style_path.Upload_txt_vw}>
                    <Text style={Style_path.head_text}>Upload picture</Text>
                </View>

                <TouchableOpacity style={Style_path.Upload_btn}>
                    <Image source={uploadIcon} style={Style_path.Upload_icon} />
                </TouchableOpacity>


                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={[Colors.sec_pink, Colors.pri_pink]}
                    style={Style_path.register_vw}>
                    <Text style={Style_path.tab_txt}>REGISTER</Text>
                </LinearGradient>


                <View style={Style_path.Bottom_txt_vw}>
                    <Text style={Style_path.bottom_txt1}>You have account? </Text>
                    <Text style={Style_path.bottom_txt2}>Log-In </Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default Register;
