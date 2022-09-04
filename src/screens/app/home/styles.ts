import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container: {

    },

    button2: {
        position: 'absolute',
        bottom: height(10)
    },
    mainContainer: {
        flexDirection: 'row',
        marginHorizontal: width(5),
        marginVertical: width(2),
    },
    textContainer: {
        marginLeft: width(3)
    },
    centeredView: {
        bottom: 0,
        position: 'absolute',
        width: width(100),
        height: height(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopEndRadius: width(5),
        borderTopLeftRadius: width(5),
        padding: width(6),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5

    },
    congrats: {
        flex: 1,
        backgroundColor: 'rgba(54, 0, 247, 0.25)',
        width: width(100)
    },
    lefttxt: {
        width: width(50),
        alignItems: 'center'
    },
    ontouch: {
        borderBottomColor: AppColors.primary,
        borderBottomWidth: width(0.5)
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width(100),
        borderBottomColor: AppColors.grey50,
        borderBottomWidth: width(0.2)
    },
    sideMenuStyle: {
        width: width(75),
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: "white",
        padding: width(6),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
    ,
    left:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:width(2)
    },
    settingcontainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:width(75),
        backgroundColor:AppColors.primary,
        position:'absolute',
        top:0,
        padding:width(4),

    },
    button1: {
        marginVertical: width(5),
        width: width(70)
    }

})

export default Styles;