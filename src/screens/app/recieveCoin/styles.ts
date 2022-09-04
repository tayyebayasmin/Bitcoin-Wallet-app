import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container: {
        width: width(100),
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    maincontainer: {
        width: width(75),
        backgroundColor: 'white',
        marginVertical: width(5),
        alignItems: 'center',
        padding: width(3),
        borderRadius:width(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    icon: {
        marginHorizontal: width(6),
        marginVertical: width(2),
        backgroundColor: '#B8D4EC',
        padding: width(4),
        borderRadius: width(100),
        alignItems: 'center',
    }


})

export default Styles;