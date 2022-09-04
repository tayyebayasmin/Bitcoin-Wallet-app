import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { width } from '~utills/Dimensions';
import styles from './styles';


const ImportScreen2 = ({ navigation }: NativeStackScreenProps<any>) => {
    setTimeout(() => {
        navigation.replace(ScreenNames.IMPORTSCREEN3)
    }, 3000);
    return (
        <ScreenWrapper>
            <View style={styles.Container}>
                <SVGIcons.bitcoin />

                <MediumText size={5.5} color={AppColors.black} textStyles={styles.text}>Importing Mainnet Data...</MediumText>
                <View style={{ marginVertical: width(5) }}>
                    <SVGIcons.loaddata2 />
                </View>
                <SmallText textAlign='center'>The mnemonics should be placed in a
                    safe place to prevent loss.</SmallText>
            </View>
        </ScreenWrapper>
    )
};

export default ImportScreen2;