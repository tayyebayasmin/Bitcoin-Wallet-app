import { StyleSheet } from "react-native";
import { FontFamily } from "~assets/fonts";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimensions";

const Styles = StyleSheet.create({
    container: {
        width: width(90),
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
    },
    txt:{
        marginHorizontal:width(4),
        marginVertical:width(5)
    },
    iconrow: {
        flexDirection: 'row',
        marginVertical:width(4)
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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

export default Styles;