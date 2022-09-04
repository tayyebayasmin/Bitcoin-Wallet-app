import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center'
    },
    innerContainer: {
        width: width(80),
        padding: width(2.5),
        paddingHorizontal: width(4),
        backgroundColor: AppColors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: AppColors.primary,
        borderWidth:width(0.3),
        borderRadius:width(10)
    },
    inputStyle:{
        paddingVertical: height(0.06),
        fontFamily: FontFamily.poppinsRegular,
        color: AppColors.primary,
        width: width(65),
        
    },
    
    eyeIcon:{
        alignSelf: 'center',
    }
})

export default styles;