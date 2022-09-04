import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        alignSelf: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginVertical: height(8)
    },
    button: {
        width: width(80),
        marginVertical:width(8)
    },
    textfield1: {
        marginTop:width(5)
    },
    checkboxRow: {
        flexDirection: 'row',
        paddingTop: height(3),
        alignItems: 'center'
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
    }
    //modal
    ,
    iconrow: {
        flexDirection: 'row',
        marginVertical:width(4)
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        backgroundColor: "white",
        borderRadius: width(5),
        padding: width(6),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

})

export default styles;