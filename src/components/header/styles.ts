import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimensions';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    backgroundColor: AppColors.headerColor,
    paddingVertical: height(1)
  },
  dashboardHeading: {
    alignSelf: 'center',
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerHeading:{
    alignSelf: 'center',
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'center',
     alignItems: 'center',
  },
  backIcon:{
    position: 'absolute',
    left: 0
  },
  rightIcons:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: width(15), 
    alignItems: 'center',
  }
});

export default styles;
