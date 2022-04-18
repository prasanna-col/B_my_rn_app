// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Image,StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './assets/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
const Style_path = require('./assets/Styles');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const downIcon = require("./assets/img/downIcon.png")
const uploadIcon = require("./assets/img/upload.png")
const white_bg = require("./assets/img/white_bg.jpeg")


const Profile = ({ navigation }) => {
    const [Firstname, setFirstname] = useState('AboutReact');
    const [Lastname, setLastname] = useState('AboutReact');
    const [PhoneNum, setPhoneNum] = useState('9988239823');
    const [BrandName, setBrandName] = useState('ABC Brand');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar hidden />
            <View style={{ width: "100%", height: windowHeight * 0.25, backgroundColor: "#f9cafc" }}>
            <Image source={white_bg} style={{height:windowHeight * 0.25, width:"100%", resizeMode:"cover"}} />
            </View>

            <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={[Colors.sec_pink,  Colors.pri_pink]}
  style={{width: "100%", borderTopLeftRadius: RFValue(10), borderTopRightRadius: RFValue(10), height: RFValue(50),  bottom: RFValue(10), flexDirection: "row"}}>
<View style={{ width:"100%",  flexDirection: "row" }}>
                <View style={{ width: "50%", alignItems: "flex-end", justifyContent: "center" }}>

                    <View style={{ alignItems: "center", justifyContent: "center", height: RFValue(30), width: RFValue(70), borderRadius: RFValue(5), borderColor: "#fff", borderWidth: 0.8, marginRight: "20%" }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: RFValue(15) }}>LOGIN</Text>
                    </View>
                </View>
                <View style={{ width: "50%", alignItems: "flex-start", justifyContent: "center" }}>

                    <View style={{ alignItems: "center", justifyContent: "center", height: RFValue(30), width: RFValue(70), borderRadius: RFValue(5), borderColor: "#fff", borderWidth: 0.8, marginLeft: "20%" }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: RFValue(15) }}>SIGN UP</Text>
                    </View>
                </View>
            </View>
</LinearGradient>

            
            <ScrollView style={{ paddingHorizontal: "8%", paddingVertical: "2%" }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#a3a3a3", paddingVertical: "5%", height: RFValue(70) }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>First Name</Text>
                    <TextInput
                        style={{ fontWeight: "bold",height: RFValue(35) }}
                        onChangeText={(text) => { setFirstname(text) }}
                        value={Firstname}
                    />
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#a3a3a3", paddingVertical: "5%", height: RFValue(70) }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>Last Name</Text>
                    <TextInput
                        style={{ fontWeight: "bold",height: RFValue(35) }}
                        onChangeText={(text) => { setLastname(text) }}
                        value={Lastname}
                    />
                </View>

                <View style={{  paddingVertical: "5%", height: RFValue(50) , flexDirection:"row"}}>
                    <View style={{width:"40%"}}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>Date Of Brith</Text>
                    </View>
                    
                    <View style={{width:"60%", }}>
                    <Text  style={{fontWeight: "bold", color:"#a3a3a3",fontSize: RFValue(13),textDecorationLine: 'underline', }}>   DD/MM/YYYY </Text>
                    </View>
                    
                    
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#a3a3a3", paddingVertical: "5%", height: RFValue(70) }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>Phone Number</Text>
                    {/* <TextInput
                        style={{ height: RFValue(35) }}
                        onChangeText={(text) => { setPhoneNum(text) }}
                        value={PhoneNum}
                    /> */}

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "15%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={{fontWeight: "bold",}}>+91</Text>
                        </View>
                        <View style={{ width: "85%" }}>
                            <TextInput
                                style={{ fontWeight: "bold",height: RFValue(35) }}
                                onChangeText={(text) => { setPhoneNum(text) }}
                                value={PhoneNum}
                            />
                        </View>


                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#a3a3a3", paddingVertical: "5%", height: RFValue(70) }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>Select Brand Name</Text>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "75%" }}>
                            <TextInput
                                style={{ height: RFValue(35) }}
                                onChangeText={(text) => { setBrandName(text) }}
                                value={BrandName}
                            />
                        </View>
                        <View style={{ width: "25%", alignItems: "center", justifyContent: "center" }}>
                            <Image source={downIcon} style={{height:RFValue(10), width:RFValue(10)}} />
                        </View>

                    </View>

                </View>
                <View style={{  paddingVertical: "5%", }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13) }}>Upload Adhaar card</Text>
                </View>

                <TouchableOpacity style={{width:"100%", height:RFValue(30), alignItems:"center", justifyContent:"center", borderRadius:RFValue(10), borderWidth:0.7, borderColor:Colors.pri_pink}}>
                <Image source={uploadIcon} style={{height:RFValue(15), width:RFValue(15)}} />
                </TouchableOpacity>


                <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={[Colors.sec_pink,  Colors.pri_pink]}
  style={{width:"100%", height:RFValue(50), alignItems:"center", justifyContent:"center", borderRadius:RFValue(10), backgroundColor:Colors.pri_pink, marginTop:RFValue(20)}}>
  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: RFValue(15) }}>REGISTER</Text>
</LinearGradient>

                {/* <TouchableOpacity style={{width:"100%", height:RFValue(50), alignItems:"center", justifyContent:"center", borderRadius:10, backgroundColor:Colors.pri_pink, marginTop:RFValue(20)}}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: RFValue(15) }}>SIGN UP</Text>
                </TouchableOpacity> */}
                
                <View style={{  paddingTop: "2%",paddingBottom:"5%", flexDirection:"row", alignItems:"center", justifyContent:"center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13), color:Colors.black }}>You have account? </Text>
                    <Text style={{ fontWeight: "bold", fontSize: RFValue(13),color:Colors.pri_pink }}>Log-In </Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default Profile;
