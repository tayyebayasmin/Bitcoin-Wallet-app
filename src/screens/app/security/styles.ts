import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({

    container: {
        width: width(95),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    extra: {
        borderBottomWidth: width(0.1),
        borderColor: AppColors.grey20
    },
    txt: {
        marginHorizontal: width(4),
        marginVertical: width(5)
    },

})

export default Styles;