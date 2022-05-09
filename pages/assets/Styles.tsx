import { Colors } from './Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

var React = require('react-native');

var { StyleSheet, Dimensions } = React;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({

    feedback_view: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors.white },
    feedback_txt: { fontSize: RFValue(12), color: Colors.gray },
    orderBtnView: { alignItems: "center", justifyContent: "center", backgroundColor: Colors.white, marginBottom: RFValue(20) },
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

    // new register page
    img_view: { width: "100%", height: windowHeight * 0.25, backgroundColor: "#f9cafc" },
    top_img: { height: windowHeight * 0.25, width: "100%", resizeMode: "cover" },
    tab_style: { width: "100%", borderTopLeftRadius: RFValue(10), borderTopRightRadius: RFValue(10), height: RFValue(50), bottom: RFValue(10), flexDirection: "row" },
    tab_view: { width: "100%", flexDirection: "row" },
    tab_left: { width: "50%", alignItems: "flex-end", justifyContent: "center" },
    tab_left_in: { alignItems: "center", justifyContent: "center", height: RFValue(30), width: RFValue(70), borderRadius: RFValue(5), borderColor: "#fff", borderWidth: 0.8, marginRight: "20%" },
    tab_txt: { color: "#fff", fontWeight: "bold", fontSize: RFValue(15) },
    tab_ryt: { width: "50%", alignItems: "flex-start", justifyContent: "center" },
    tan_ryt_in: { alignItems: "center", justifyContent: "center", height: RFValue(30), width: RFValue(70), borderRadius: RFValue(5), borderColor: "#fff", borderWidth: 0.8, marginLeft: "20%" },
    scroll_view: { paddingHorizontal: "8%", paddingVertical: "2%" },
    main_view_style: { borderBottomWidth: 1, borderBottomColor: "#a3a3a3", paddingVertical: "5%", height: RFValue(70) },
    head_text: { fontWeight: "bold", fontSize: RFValue(13) },
    text_input: { fontWeight: "bold", height: RFValue(35) },
    dob_main_view: { paddingVertical: "5%", height: RFValue(50), flexDirection: "row" },
    dob_txt_view1: { width: "40%" },
    dob_txt_view2: { width: "60%", },
    dob_txt: { fontWeight: "bold", color: "#a3a3a3", fontSize: RFValue(13), textDecorationLine: 'underline', },
    ph_main_view: { flexDirection: "row" },
    ph_code_view: { width: "15%", alignItems: "flex-start", justifyContent: "center" },
    code_txt: { fontWeight: "bold", },
    ph_num_view: { width: "85%" },
    brand_txt_view: { width: "75%" },
    brand_input: { height: RFValue(35) },
    brand_icon_view: { width: "25%", alignItems: "center", justifyContent: "center" },
    brand_icon: { height: RFValue(10), width: RFValue(10) },
    Upload_txt_vw: { paddingVertical: "5%", },
    Upload_btn: { width: "100%", height: RFValue(30), alignItems: "center", justifyContent: "center", borderRadius: RFValue(10), borderWidth: 0.7, borderColor: Colors.pri_pink },
    Upload_icon: { height: RFValue(15), width: RFValue(15) },
    register_vw: { width: "100%", height: RFValue(50), alignItems: "center", justifyContent: "center", borderRadius: RFValue(10), backgroundColor: Colors.pri_pink, marginTop: RFValue(20) },
    Bottom_txt_vw: { paddingTop: "2%", paddingBottom: "5%", flexDirection: "row", alignItems: "center", justifyContent: "center" },
    bottom_txt1: { fontWeight: "bold", fontSize: RFValue(13), color: Colors.black },
    bottom_txt2: { fontWeight: "bold", fontSize: RFValue(13), color: Colors.pri_pink }









});