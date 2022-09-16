import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container: {
        width: width(90),
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
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