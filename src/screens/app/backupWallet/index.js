import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View, DevSettings } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { Button, TextField } from '~components';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';
import styles from './styles';
import { FontFamily } from '~assets/fonts';

const BackupWallet = ({ navigation }) => {
    var arrayofNumbers = [7, 2, 5, 3, 1, 11, 6, 8, 4, 12, 9, 10]
    const shuffledArray = arrayofNumbers.sort((a, b) => 0.5 - Math.random());
    var arrayofWords = ['involve', 'shaft', 'magnet', 'between', 'sauce', 'wood', 'increase', 'usual', 'hour', 'fine', 'pave', 'solve']
    function convertToObj(a, b) {
        if (a.length != b.length || a.length == 0 || b.length == 0) {
            return null;
        }
        let obj = {};
        a.forEach((k, i) => { obj[k] = b[i] })
        return obj
    }
    var newarr
    newarr = Object.entries(convertToObj(arrayofNumbers, arrayofWords))

    return (
        <ScreenWrapper
            scrollType="scroll"
            scrollViewProps={{
                showsVerticalScrollIndicator: false,
            }}>

            <View style={styles.container}>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <SVGIcons.backArrow />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <SVGIcons.CoinSafe />
                    </View>
                </View>
                <View style={{marginTop:width(7)}}>
                    <MediumText color={AppColors.black} textAlign='center' fontFamily={FontFamily.poppinsSemiBold} >Backup Mnemonics</MediumText>
                </View>
                <SmallText size={4.6} fontFamily={FontFamily.poppinsMedium} textAlign='center'>
                    Transcribe the following mnemonics in order
                </SmallText>
                <View style={styles.table}>
                    {
                        newarr.map((data) => {
                            return (
                                <View style={styles.innerBox} >
                                    <SmallText color={AppColors.grey50}>{data[0]}</SmallText>
                                    <SmallText >{data[1]}</SmallText>
                                </View>
                            )
                        })
                    }

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <SmallText color={AppColors.primary}>12-word version</SmallText>
                    <TouchableOpacity

                    >
                        <SmallText color={AppColors.primary}>Change <SVGIcons.change /></SmallText>
                    </TouchableOpacity>
                </View>


            </View >



        </ScreenWrapper >
    );
};

export default BackupWallet;
