import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        alignSelf: 'center',
        
    },

    container2: {
        flexDirection: 'row',
        width: width(90),
        marginVertical: width(6),
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width(70)
    },

    button2: {
        
        marginVertical: width(15),
        width: width(80),

    },
   table:{
    width:width(90),
    borderRadius:width(2),
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center',
    marginLeft:width(3),
    marginVertical:width(3)
    
   },
   innerBox:{
    width:width(28),
    padding:width(1),
    alignItems:'center',
    // backgroundColor:'red',
    borderColor:AppColors.grey20,
    borderWidth:width(0.1)
   }

})

export default styles;