import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container:{
        width: width(85),
        alignSelf: 'center',
        alignItems:'center',
        flex:1
    },
    logo:{
        alignSelf: 'center',
        marginVertical: height(6.5)
    },
    BottomContainer:{
        position:'absolute',
        bottom:width(12)
    },
    button:{
        width: width(80), 
        borderColor:AppColors.primary,
        borderWidth:width(0.2),
        marginTop:width(5),

    },
    button2:{
        width: width(80),
       
    },
    text1:{
        marginVertical:width(4)
    },
    TopText:{
        marginTop:width(10)
    },
    BottomText:{
        marginTop:width(7)
    }
    
})

export default styles;