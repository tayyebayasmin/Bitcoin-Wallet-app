import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import SVGIcons, {  BackArrowSVG, EmailSVG } from '~assets/svg';
import {LargeText, SmallText} from '~components/text';
import styles from './styles';
import {FontFamily} from '~assets/fonts'
import AppColors from '~utills/AppColors';
import { width } from '~utills/Dimensions';

interface Props {
  showBackIcon?: boolean;
  containerStyle?: ViewStyle;
  heading?: string;
  leftText?: string;
  onPressBack?(): void;
  onPressAdd?(): void;
  onPressSettings?(): void;
}
const Header = ({
  showBackIcon = false,
  containerStyle = {},
  heading = '',
  onPressBack,
  onPressAdd,
  onPressSettings,
}: Props) => {

  return (
    <View style={[styles.container, containerStyle]}>
      {showBackIcon ?(
        <View style={styles.centerHeading}>
            <Pressable style={styles.backIcon} onPress={onPressBack}>
                <BackArrowSVG />
            </Pressable>
            <LargeText size={4.5} fontFamily={FontFamily.poppinsMedium}>{heading}</LargeText>
        </View>
      ) : (
        <View style={styles.dashboardHeading}>
            <LargeText size={6.5} fontFamily={FontFamily.poppinsMedium}>{heading}</LargeText>
            <View style={styles.rightIcons}>
                <Pressable onPress={onPressAdd}>
                    <SVGIcons.add />
                </Pressable>
                <Pressable onPress={onPressSettings}>
                    <SVGIcons.settings />
                </Pressable>
            </View>
        </View>
      )}
    </View>
  );
};

export default Header;
