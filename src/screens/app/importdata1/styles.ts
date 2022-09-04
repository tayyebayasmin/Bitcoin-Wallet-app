import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    Container:{
        width:width(80),
        flex:1,
        alignItems:'center',
        marginVertical:width(15),
        alignSelf:'center'
        
    },
    text:{
        marginTop:width(15),
        
    }
   
    
})

export default styles;