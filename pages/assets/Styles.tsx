import { Colors } from './Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

var React = require('react-native');

var { StyleSheet, Dimensions } = React;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({

    feedback_view: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors.white },
    feedback_txt: { fontSize: RFValue(12), color: Colors.gray },
    orderBtnView: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.white , marginBottom:RFValue(20)},
    order_btn: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.yellow, height: 50, marginHorizontal: 20, borderRadius: 5, width: "90%", flexDirection: "row" },
    order_txt: { fontSize: RFValue(16), color: Colors.black, paddingLeft: 10, fontWeight: "500" },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    listbg: {
        backgroundColor: Colors.green, width: windowWidth
    },
    txtView: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        width: windowWidth, justifyContent: "center", alignItems: "center"
    },
    headtextStyle: {

        color: Colors.white,
        fontSize: RFValue(18),
        textAlign: "center",
        fontWeight: "bold"
    },
    headtext_num: {
        color: Colors.green,

    },
    circle: {
        width: RFValue(36),
        height: RFValue(36),
        borderRadius: RFValue(41) / 2, backgroundColor: Colors.yellow,
        alignItems: "center", justifyContent: "center"
    },
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
    itemview: {
        flexDirection: "row",
        backgroundColor: Colors.white,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: RFValue(10)
    },
    iconstyle: {
        height: RFValue(38), width: RFValue(38), resizeMode: "contain"
    },
    btnImg: {
        height: RFValue(28), width: RFValue(28), resizeMode: "contain"
    },
    imgbgInside: { padding: RFValue(19), margin: RFValue(19), backgroundColor: Colors.lightWhite, alignItems: "center", justifyContent: "center", borderRadius: 10, },
    itemtextView: { marginHorizontal: 3, width: windowWidth * 0.56, marginRight: 30, alignItems: "flex-start", justifyContent: "center", flexDirection: "column" },
    itemtxt1: { fontSize: RFValue(15), color: Colors.gray, bottom: 3 },
    itemtxt2: { fontSize: RFValue(18), fontWeight: "bold", marginRight: 10, color: Colors.black, marginTop: RFValue(5) },

    linearGradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        height: RFValue(110),
        alignItems: "center", justifyContent: "center"
    },
    order_now_btn: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.white, height: 30, left: 10, borderRadius: 5, width: "60%", flexDirection: "row", top: RFValue(17) },
    order_now_txt: {
        fontSize: RFValue(15), color: Colors.black, fontWeight: "500",
    },
    offer_txt: { fontSize: 15, fontWeight: "bold", textAlign: "left", left: 10, top: RFValue(6) },
    offer_lft: { width: windowWidth * 0.4 },
    offer_ryt: { alignItems: "flex-end", justifyContent: "center", width: windowWidth * 0.27 },
    offer_view: { flexDirection: "row", width: windowWidth * 0.78, height: RFValue(100) },
    offer_perc: { fontSize: 20, },

});