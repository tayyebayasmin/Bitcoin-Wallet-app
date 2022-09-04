import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View, Switch, Image, Modal } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons, { CheckboxSVG, PenSVG, UnCheckboxSVG } from '~assets/svg';
import { Button, TextField } from '~components';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';
import styles from './styles';
import { FontFamily } from '~assets/fonts';


const MnemonicsScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <ScreenWrapper
            scrollType="scroll"
            scrollViewProps={{
                showsVerticalScrollIndicator: false,
            }}>

            <View style={styles.container}>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate(ScreenNames.SETUP_PASSCODE) }}>
                        <SVGIcons.backArrow />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <SVGIcons.CoinSafe />
                    </View>
                </View>
                <View style={{ marginVertical: width(3), alignContent: 'center', alignSelf: 'center' }}>
                    <SVGIcons.SecureWallet />
                </View>
                <MediumText color={AppColors.black} textAlign='center' fontFamily={FontFamily.poppinsSemiBold} >Generate Mnemonics</MediumText>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: width(3) }}>
                    <SmallText size={3.5} >
                        <SVGIcons.trueSVG /> Transcribe
                    </SmallText>
                    <SmallText size={3.5} >
                        <SVGIcons.falseSVG /> Digital Copy
                    </SmallText>
                    <SmallText size={3.5} >
                        <SVGIcons.falseSVG />  Screenshot
                    </SmallText>
                </View>
                <SmallText size={4.5} fontFamily={FontFamily.poppinsMedium}>
                    <SVGIcons.key />  The mnemonic is the key to
                    your wallet
                </SmallText>
                <SmallText textStyles={styles.text1}>Obtaining your mnemonic means
                    obtaining your assets</SmallText>
                <SmallText size={4.5} fontFamily={FontFamily.poppinsMedium}>
                    <SVGIcons.pen />  Transcribe the mnemonics
                </SmallText>
                <SmallText textStyles={styles.text1}>Do not make copies or take
                    screenshots.</SmallText>
                <SmallText size={4.5} fontFamily={FontFamily.poppinsMedium}>
                    <SVGIcons.store />  Store in a safe place
                </SmallText>
                <SmallText textStyles={styles.text1}>Once lost, the assets cannot be
                    recovered</SmallText>
                <View style={styles.BottomContainer}>
                    <Button
                        containerStyle={styles.button1}
                        textStyle={{ color: AppColors.primary }}
                        variant='Null'
                        onPress={() => { navigation.navigate(ScreenNames.ADD_MAINNET) }}
                    >
                        Later
                    </Button>
                    <Button
                        containerStyle={styles.button2}
                        textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                        onPress={() => { navigation.navigate(ScreenNames.BACKUP_MNEMONICS) }}
                    >
                        Generate
                    </Button>
                </View>
            </View>



        </ScreenWrapper>
    );
};

export default MnemonicsScreen;
