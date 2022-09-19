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
    var arrayofNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // const shuffledArray = arrayofWords.sort((a, b) => 0.5 - Math.random());
    var arrayofWords = ['involve', 'shaft', 'magnet', 'between', 'sauce', 'wood', 'increase', 'usual', 'hour', 'fine', 'pave', 'solve']
    function convertToObj(a, b) {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(a)
        let obj = {};
        a.forEach((k, i) => { obj[k] = b[i] })
        return obj
    }
    var newarr
    newarr = Object.entries(convertToObj(arrayofNumbers, arrayofWords))
    // console.log(newarr)
    const [isFetching, setIsFetching] = useState(false);
    const onRefresh = () => {
        setIsFetching(!isFetching);
     
    };
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
                    onPress={onRefresh}

                    >
                        <SmallText color={AppColors.primary}>Change <SVGIcons.change /></SmallText>
                    </TouchableOpacity>
                </View>


            </View >



        </ScreenWrapper >
    );
};

export default BackupWallet;
