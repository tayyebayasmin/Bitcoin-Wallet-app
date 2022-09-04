import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import styles from './styles';


const Loading = ({ navigation }: NativeStackScreenProps<any>) => {
setTimeout(() => {
    navigation.replace(ScreenNames.MNEMONICS)
}, 3000);
    return (
        <ScreenWrapper>
            <View style={styles.Container}>
            <SVGIcons.bitcoin/>

            <MediumText size={6} color={AppColors.black} textStyles={styles.text}>Creating your Wallet...</MediumText>
            <SmallText>This shouldn't take long</SmallText>
            </View>
        </ScreenWrapper>
    );
};

export default Loading;