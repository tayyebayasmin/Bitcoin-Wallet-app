import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center'
        ,marginVertical:width(15)
    },
    text:{
        marginTop:width(15)
    }
   
    
})

export default styles;