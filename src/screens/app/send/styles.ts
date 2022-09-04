import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container:{
     width:width(100),
     flex:1,
     alignItems:'center',
     alignSelf:'center'
    },
    input:{
        width:width(60),
        marginHorizontal:width(3),
        color:AppColors.white
        

    },
 
})

export default Styles;