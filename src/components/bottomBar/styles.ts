import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimensions';
const styles = StyleSheet.create({
    icon:{
        backgroundColor:AppColors.primary,
        padding:width(3),
        borderRadius:width(100)
    },
    iconRow:{
        width:width(100),
        padding:width(2),
        paddingHorizontal:width(5),
        bottom:0,
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:width(14),
        backgroundColor:AppColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8
    },

});
export default styles;
