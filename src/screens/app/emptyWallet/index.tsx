import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Image, Modal, Pressable, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';
import { FontFamily } from '~assets/fonts';

const EmptyWallet = ({ navigation }: NativeStackScreenProps<any>) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
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
            <TouchableOpacity>
                <View style={{ padding: width(6) }}>
                    <SmallText >Create a New Wallet</SmallText>
                </View>
            </TouchableOpacity>


        </>

    );
};

export default EmptyWallet;
