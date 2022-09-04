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
        marginVertical:width(2),
         width: width(80),

    },
   table:{
    width:width(90),
    borderRadius:width(2),
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center',
    marginLeft:width(3),
    marginVertical:width(3),
    alignItems:'center'
    
   },
   txt:{
    marginHorizontal:width(1)
   },
   field:{
    borderWidth:width(0.2),
    borderRadius:width(1),
    justifyContent:'center'
   },
   innerBox:{
    width:width(28),
    padding:width(1),
    alignItems:'center',
    // backgroundColor:'red',
    borderColor:AppColors.grey20,
    borderWidth:width(0.1)
   },
   input:{
    margin:width(1),
    width:width(35),
    borderWidth:width(0.2),
    height:height(5),
    borderRadius:width(7),
    borderColor:'black',
    paddingHorizontal:width(4)
   }
})

export default styles;