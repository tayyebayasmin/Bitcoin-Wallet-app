import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';

const MultiCoinWallet = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <ScreenWrapper>
            <View style={{ backgroundColor: AppColors.primary, padding: width(3.5), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                >
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <View style={{ marginLeft: width(3) }}>
                    <SmallText size={(5)} color={AppColors.white}> Wallets</SmallText>
                </View>
                <View style={{ right: width(4), position: 'absolute' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreenNames.WALLETSETUP)}>
                        <LargeText size={8} color={AppColors.white}>+</LargeText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: width(20), marginVertical: width(5) }}>
                <SmallText>Multi-Coin Wallets</SmallText>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate(ScreenNames.WALLETDETAIL)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: width(5) }}>
                <View style={{ alignItems: 'center', borderRadius: width(100), width: width(12), padding: width(2), borderColor: AppColors.primary, borderWidth: width(0.1) }}>
                    <SVGIcons.wallet2 />
                </View>
                <View style={{ marginLeft: width(3) }}>
                    <SmallText>Multi-Coin Wallet 1</SmallText>
                    <SmallText size={3} color={AppColors.grey50} >Multi_Coin Wallets</SmallText>
                </View>

                <View style={{ right: 0, position: 'absolute' }}>
                    <TouchableOpacity><SVGIcons.dot /></TouchableOpacity>
                </View>
            </View>
            </TouchableOpacity>
        </ScreenWrapper >
    );
};

export default MultiCoinWallet;
