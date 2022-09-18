import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container: {
        width: width(90),
        height:height(100),
        alignSelf: 'center',
        alignItems: 'center',
        
    },
    text1: {
        marginVertical: width(2)
    },
    toptext:{
        width:width(90)
    },
    input:{
        backgroundColor:'#F7F9F8',
        width:width(70),
        marginHorizontal:width(3)

    },
    container2:{
        borderRadius:width(7),
        borderWidth:width(0.3),
        borderColor:AppColors.primary,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:width(3),
        backgroundColor:'#F7F9F8'
    },
    button:{
      marginVertical:width(5),
      marginBottom:width(15),
    //   bottom:0,
    //   position:'absolute'
    },

})

export default Styles;