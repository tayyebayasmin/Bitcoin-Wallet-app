import React from 'react';
import {Pressable, StyleSheet, Text, TextProps} from 'react-native';
import {FontFamily} from '~assets/fonts';
import AppColors from '~utills/AppColors';
import {width} from '~utills/Dimensions';

interface Props {
  children?: any;
  color?: string;
  textStyles?: object;
  fontFamily?: string;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textProps?: TextProps;
  onPress?(): void;
}
export const LargeText = ({
  children = '',
  color = AppColors.black,
  textStyles = {},
  fontFamily = FontFamily.poppinsMedium,
  size = 7,
  textAlign = 'auto',
  textProps,
  onPress = undefined,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      fontFamily: fontFamily,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const MediumText = ({
  children = '',
  size = 6,
  textAlign,
  color = AppColors.primary,
  textStyles,
  fontFamily = FontFamily.poppinsRegular,
  textProps,
  onPress = undefined,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const SmallText = ({
  children = '',
  size = 4,
  textAlign,
  color = AppColors.black,
  textStyles,
  fontFamily = FontFamily.poppinsRegular,
  textProps,
  onPress = undefined,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
