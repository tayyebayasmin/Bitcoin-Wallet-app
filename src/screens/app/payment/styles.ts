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
    blackbox:{
        flexDirection:'row',
        width:width(90),
        backgroundColor:'#F3F1F1',
        alignSelf:'center',
        borderRadius:width(3),
        alignItems:"center",
        padding:width(2),
        marginVertical:width(3)
    },
    input:{
        width:width(60),
        marginHorizontal:width(5),
        color:AppColors.white
        

    },

})

export default Styles;