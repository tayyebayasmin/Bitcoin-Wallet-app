import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View, DevSettings, TextInput } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { Button, TextField } from '~components';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';
import styles from './styles';
import { FontFamily } from '~assets/fonts';

const MnemonicsFields = ({ navigation }) => {
    var arrayofWords = ['involve', 'shaft', 'magnet', 'between', 'sauce', 'wood', 'increase', 'usual', 'hour', 'fine', 'pave', 'solve']
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
                <View style={{ marginVertical: width(3), alignContent: 'center', alignSelf: 'center' }}>
                    <SVGIcons.SecureWallet />
                </View>
                <MediumText color={AppColors.black} textAlign='center' fontFamily={FontFamily.poppinsSemiBold} >Backup Mnemonics</MediumText>
                <SmallText size={4.6} fontFamily={FontFamily.poppinsMedium} textAlign='center'>
                    Transcribe the following mnemonics in order
                </SmallText>
                <View style={[styles.table, styles.field]}>
                    {
                        arrayofWords.map((item,index) => {
                            return (
                            <View style={{flexDirection:'row'}}> 
                            <MediumText size={5} fontFamily={FontFamily.poppinsRegular} color={AppColors.black} textStyles={styles.txt}>{index+1}</MediumText>
                                <TextInput
                                    style={styles.input}
                                    // onChangeText={onChangeNumber}
                                    keyboardType="default"
                                />
                            </View>
                            )
                        })}
                </View>
                <View style={styles.table}>
                    {
                        arrayofWords.map((data) => {
                            return (
                                <View style={styles.innerBox} >
                                    <SmallText >{data}</SmallText>
                                </View>
                            )
                        })
                    }

                </View>
                <Button
                    containerStyle={styles.button2}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={() => { navigation.navigate(ScreenNames.IMPORTSCREEN1) }}
                >
                    Complete Backup
                </Button>

            </View >



        </ScreenWrapper >
    );
};

export default MnemonicsFields;
