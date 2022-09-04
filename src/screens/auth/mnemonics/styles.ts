import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        alignSelf: 'center'

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
    checkboxtext: {
        color: AppColors.primary,
        textDecorationLine: 'underline'
    },
    container3: {
        width: width(80),
        alignSelf: 'center'
    },
    text: {
        marginVertical: width(3)
    },


    button1: {
        width: width(80),
        borderColor: AppColors.primary,
        borderWidth: width(0.2),
    },
    button2: {
        marginTop: width(5),
        width: width(80),

    },
    BottomContainer: {
        marginVertical:width(15)
    },
    text1:{
        width:width(70),
        alignSelf:'center'
    }

})

export default styles;