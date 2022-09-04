import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimensions';
const styles = StyleSheet.create({
    container:{
        width:width(20),
        padding:width(1.8),
        margin:width(2),
        alignItems:'center',
        borderRadius:width(3),
    
    },
    containerStyle:{
        borderWidth:width(0.2),
        borderColor:AppColors.primary,

    },
    text:{
        paddingTop:width(2)
    },
});
export default styles;
