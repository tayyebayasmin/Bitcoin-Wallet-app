import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimensions';
const styles = StyleSheet.create({
    container: {
        width:width(90),
        marginVertical:width(7),
        alignSelf:'center'
    },
    icon:{
        backgroundColor:AppColors.primary,
        padding:width(3),
        borderRadius:width(100)
    },
    iconRow:{
        flexDirection:'row'
        ,marginHorizontal:width(3),
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:width(14)

    },
   
    profile:{
        alignItems:'center'
    }
});
export default styles;
