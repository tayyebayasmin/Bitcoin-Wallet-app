import React, {useMemo} from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styles from './styles';

// Component Props
type VariantType = 'yellow' | 'black' | 'Null' | 'red' | 'white';
interface Props {
  onPress?: () => void;
  children: string;
  containerStyle?: ViewStyle;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  textProps?: TextProps;
  variant?: VariantType;
  withShadow?: boolean;
  disabled?: boolean;
}

const Button = ({
  onPress,
  children = 'Button',
  variant = 'yellow',
  withShadow = true,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false
}: Props) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(variant === 'yellow'
          ? styles.yellowContainer
          : variant === 'black'
          ? styles.blackContainer
          : variant === 'Null'
          ? styles.NullContainer
          : variant === 'red'
          ? styles.redContainer
          : styles.whiteContainer)
      },
    };
  }, [variant, withShadow]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      {...touchableOpacityProps}>
      <Text style={[styles.text, textStyle]} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
