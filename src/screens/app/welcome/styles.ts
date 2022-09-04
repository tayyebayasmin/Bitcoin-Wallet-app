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
    button:{
        width: width(80),
        position:'absolute',
        bottom:width(15)  
    },
    text1:{
        marginVertical:width(4)
    },
    WelcomeText:{
        marginTop:width(10)
    },
    
})

export default styles;