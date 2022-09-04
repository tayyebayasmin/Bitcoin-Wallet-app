import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { width } from '~utills/Dimensions';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: width(12),
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  yellowContainer: {
    backgroundColor: AppColors.primary,
  },
  blackContainer: {
    backgroundColor: AppColors.black,
  },
  NullContainer: {
    backgroundColor:AppColors.white,
  },
  redContainer: {
    backgroundColor: AppColors.red,
  },
  whiteContainer: {
    backgroundColor: AppColors.white,
  },
  text: {
    color: AppColors.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: width(3.5),
  },
});

export default styles;
