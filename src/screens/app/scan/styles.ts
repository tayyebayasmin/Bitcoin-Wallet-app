import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
iconRow:{
    position: 'absolute',
    bottom: height(6),
    alignSelf:'center',
    flexDirection:'row',

},
flashIcon:{
marginHorizontal:width(1)
},
cameraIcon:{
marginHorizontal:width(1)
},
backIcon:{
    position: 'absolute',
    left: width(5),
    width: width(10),
    height: width(20),
    justifyContent: 'center',
  },
});

export default styles;