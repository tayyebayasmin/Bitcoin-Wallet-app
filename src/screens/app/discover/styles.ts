import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginVertical: width(2),
        alignItems:'center',
        width: width(100),
        borderBottomColor:AppColors.grey,
        borderBottomWidth:width(0.2),
        paddingLeft: width(4),
    },
    staking:{
        padding:width(1),
    },
    textContainer: {
        marginLeft: width(3)
    },
    txt:{
        marginHorizontal:width(4),
        marginVertical:width(5)
    },
    input:{
        width:width(60),
        marginHorizontal:width(3),
        color:AppColors.white
        

    },

})

export default Styles;