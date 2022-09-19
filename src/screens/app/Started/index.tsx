import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { FontFamily } from '~assets/fonts';
import SVGIcons from '~assets/svg';
import { Button } from '~components';
import { MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import styles from './styles';

const StartedScreen = ({ navigation }: NativeStackScreenProps<any>) => {

    return (
        <ScreenWrapper>
            <View style={styles.container}>
            <MediumText size={5} textStyles={styles.TopText}>Wallet Setup</MediumText>
                <SmallText size={3.2} textAlign='center' textStyles={styles.text1}>Import an existing wallet or create a new one</SmallText>
                <View style={styles.logo}>
                    <SVGIcons.bitcoin />
                </View>
                <View style={styles.BottomContainer}>
                <Button
                    containerStyle={styles.button}
                    textStyle={{ color:AppColors.primary}}
                    variant='Null'
                    onPress={()=>{navigation.navigate(ScreenNames.MNEMONICS_FIELDS)}}                     
                >
                    Import Using Secret Recovery Phrase
                </Button>
                <Button
                    containerStyle={styles.button2}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={()=>{navigation.navigate(ScreenNames.INSTRUCTION)}}                     
                >
                    Create New Wallet
                </Button>
                <View style={{flexDirection:'row'}}>
                <SmallText size={2.7} textAlign='justify' textStyles={styles.BottomText}>By proceeding, you agree to these</SmallText>
                <TouchableOpacity>
                <SmallText size={2.7} textAlign='justify' fontFamily={FontFamily.poppinsSemiBold} textStyles={styles.BottomText}> terms and conditions.</SmallText>
                </TouchableOpacity>
                </View>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default StartedScreen;