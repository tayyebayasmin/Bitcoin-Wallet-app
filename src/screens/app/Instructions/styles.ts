import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container:{
        width: width(85),
        alignSelf: 'center',
        flex:1
    },
    container2:{
        flexDirection:'row',
        width:width(90),
        marginVertical:width(6),
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        width:width(60)
    },
    button:{
        marginHorizontal:width(2),
        width: width(33), 
        borderColor:AppColors.primary,
        borderWidth:width(0.2),
    },
    button2:{
        width: width(80),
       
    },
    text1:{
        marginVertical:width(4),
    },
    text2:{
        marginVertical:width(1),
    },
    text3:{
        marginVertical:width(3),
    },
    
    TopText:{
        marginTop:width(10)
    },
    BottomText:{
        marginTop:width(7)
    }
    
})

export default styles;