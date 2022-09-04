import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimensions';
const styles = StyleSheet.create({
    centeredView: {
        bottom:0,
        position:'absolute',
        width:width(100),
        height:height(40),
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

    button1:{
        marginVertical:width(5),
        width:width(70)  
      }

});
export default styles;
