// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState, Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Dimensions, TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Colors } from './Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Style_path = require('./Styles');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';

const SecondPage = ({ navigation }) => {
    const [userName, setUserName] = useState('AboutReact');

    const Step_lists = () => {
        var _list = [
            {
                text: 'Click on "Order QR" button below'
            },
            {
                text: 'Click on "Order QR" button below'
            }
        ]
        return (
            <>

                <View style={Style_path.itemview}>
                    <View style={Style_path.imgbgInside}>
                        <Image source={require('./assets/qrimg.png')} style={Style_path.iconstyle} />
                    </View>
                    <View style={Style_path.itemtextView}>
                        <Text style={Style_path.itemtxt1}>Step 1</Text>
                        <Text style={Style_path.itemtxt2}>Click on "Order QR" button below</Text>
                    </View>
                </View>

                <View style={Style_path.itemview}>
                    <View style={Style_path.imgbgInside}>
                        <Image source={require('./assets/qrimg.png')} style={Style_path.iconstyle} />
                    </View>
                    <View style={Style_path.itemtextView}>
                        <Text style={Style_path.itemtxt1}>Step 1</Text>
                        <Text style={Style_path.itemtxt2}>Select the QR Kit of your choice</Text>
                    </View>
                </View>
                <View style={Style_path.itemview}>
                    <View style={Style_path.imgbgInside}>
                        <Image source={require('./assets/qrimg.png')} style={Style_path.iconstyle} />
                    </View>
                    <View style={Style_path.itemtextView}>
                        <Text style={Style_path.itemtxt1}>Step 1</Text>
                        <Text style={Style_path.itemtxt2}>Click on "Add to cart" button</Text>
                    </View>
                </View>
                <View style={Style_path.itemview}>
                    <View style={Style_path.imgbgInside}>
                        <Image source={require('./assets/qrimg.png')} style={Style_path.iconstyle} />
                    </View>
                    <View style={Style_path.itemtextView}>
                        <Text style={Style_path.itemtxt1}>Step 1</Text>
                        <Text style={Style_path.itemtxt2}>Complete the payment</Text>
                    </View>
                </View>
            </>

            // <FlatList
            //   data={_list}
            //   renderItem={(item, index) =>
            //     <View style={Style_path.itemview}>
            //       <View style={Style_path.imgbgInside}>
            //         <Image source={require('./assets/qrimg.png')} style={Style_path.iconstyle} />
            //       </View>
            //       <View style={Style_path.itemtextView}>
            //         <Text style={Style_path.itemtxt1}>Step 1</Text>
            //         <Text style={Style_path.itemtxt2}>{i}</Text>
            //       </View>
            //     </View>
            //   }
            // />





        )
    }
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.white }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <ScrollView>
                    <LinearGradient colors={[Colors.yellow_light, Colors.yellow_dark]} style={Style_path.linearGradient}>
                        <View style={Style_path.offer_view}>
                            <View style={Style_path.offer_lft}>
                                <Text style={Style_path.offer_txt}>Order your QR kit at <Text style={Style_path.offer_perc}>50%</Text> off</Text>
                                <TouchableOpacity style={Style_path.order_now_btn}>
                                    <Text style={Style_path.order_now_txt}>Order New</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Style_path.offer_ryt}>
                                <Image source={require('./assets/qrimg.png')} style={Style_path.btnImg} />
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={Style_path.listbg}>
                        <View style={Style_path.txtView}>
                            <Text style={Style_path.headtextStyle}>Order your qr in </Text>
                            <View style={Style_path.circle}>
                                <Text style={[Style_path.headtextStyle, Style_path.headtext_num]}>4</Text>
                            </View>

                            <Text style={Style_path.headtextStyle}> easy steps </Text>
                        </View>

                        <Step_lists />


                    </View>
                    <View style={Style_path.feedback_view}>
                        <Text style={Style_path.feedback_txt}>Please click belw ti proceed towards QR store on Amazon shopping app. In case amazon shopping is ot installed, we will request you to please install the app from Google Playsore</Text>
                    </View>

                    <View style={Style_path.orderBtnView}>
                        <TouchableOpacity style={Style_path.order_btn}>
                            <Image source={require('./assets/qrimg.png')} style={Style_path.btnImg} />
                            <Text style={Style_path.order_txt}>Order New QR Kit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </Fragment>
    );
};

export default SecondPage;
