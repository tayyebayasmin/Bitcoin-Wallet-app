import React, { useMemo, useState } from "react";
import { Pressable, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { Controller } from 'react-hook-form';
import AppColors from '~utills/AppColors'
import { SmallText } from "~components/text";
import { FontFamily } from "~assets/fonts";
import styles from './styles';
import SVGIcons, { EyeSVG } from "~assets/svg";
import { height } from "~utills/Dimensions";

type KeyboardVariation =
    | 'default'
    | 'email-address'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'url'
    | 'phone-pad';

type KeyType =
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send';

interface Props {
    containerStyle?: ViewStyle;
    innerContainerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    iconStyle?: ViewStyle;
    placeholder?: string;
    name: string;
    keyboardType?: KeyboardVariation;
    keyType?: KeyType;
    maxlength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
    autofocus?: boolean;
    control: any;
    showPasswordIcon?: boolean;
    onPressIcon?(): void;
    value?: string;
    icon?: JSX.Element;
    degree?: boolean;
    editable?: boolean;
    showPassword?: boolean;
}

const TextField = (
    {
        containerStyle = {},
        innerContainerStyle = {},
        inputStyle = {},
        iconStyle = {},
        placeholder = 'Enter text here!',
        name,
        keyboardType = 'default',
        keyType = 'done',
        maxlength,
        multiline = false,
        numberOfLines,
        secureTextEntry = false,
        textAlignVertical = 'center',
        autofocus = false,
        control,
        showPasswordIcon = false,
        degree = false,
        editable = true
    }: Props
) => {

    const [eyeicon, setEyeIcon] = useState(true)
    const eyeClick = () => {
        setEyeIcon(!eyeicon)
        
    }
    return (
        <View style={[styles.container, containerStyle]}>
            <Controller
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <View style={[styles.innerContainer, innerContainerStyle]}>
                            <TextInput
                                placeholder={placeholder}
                                placeholderTextColor={AppColors.primary}
                                keyboardType={keyboardType}
                                returnKeyType={keyType}
                                maxLength={maxlength}
                                multiline={multiline}
                                value={value}
                                onChangeText={onChange}
                                numberOfLines={numberOfLines}
                                secureTextEntry={eyeicon}
                                textAlignVertical={textAlignVertical}
                                autoFocus={autofocus}
                                style={[styles.inputStyle, inputStyle]}
                                editable={editable}
                                
                            />
                            <Pressable style={styles.eyeIcon} onPress={eyeClick}>
                                {
                                (showPasswordIcon && !eyeicon)? <EyeSVG/>: showPasswordIcon && <SVGIcons.CloseEye />}
                            </Pressable>
                            {degree && <SmallText textStyles={{ marginTop: height(0.5) }} size={3} color={AppColors.lightgrey}>°C</SmallText>}
                        </View>
                        <SmallText textAlign="left" color={AppColors.red} size={3}>
                            {error ? `*${error?.message}` : ' '}
                        </SmallText>
                    </>
                )}
                name={name}
            />
        </View>
    );
}

export default TextField;
