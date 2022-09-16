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

const WalletDetail = ({ navigation }: NativeStackScreenProps<any>) => {
    const [modalVisible, setModalVisible] = useState(false);
    const onpress = () => {
     setModalVisible(!modalVisible)
    navigation.navigate(ScreenNames.EMPTYWALLET)
    }
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
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <SVGIcons.deletesvg />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ borderRadius: width(3), padding: width(3), alignSelf: 'center', width: width(90), borderColor: AppColors.primary, marginVertical: width(5), borderWidth: width(0.2) }}>
                <View style={{ marginTop: -21, backgroundColor: 'white', width: width(15) }}>
                    <SmallText color={AppColors.primary} textAlign='center'>Name</SmallText>
                </View>
                <SmallText>Multi-Coin Wallet 1</SmallText>
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate(ScreenNames.BACKUPWALLET) }}>
                <View style={{ borderWidth: width(0.2), paddingVertical: width(2), paddingHorizontal: width(4), flexDirection: 'row' }}>

                    <View style={{ marginRight: width(3) }}><SVGIcons.save /></View>
                    <SmallText>Show secret Phrase</SmallText>
                    <View style={{ right: width(3), position: 'absolute', marginTop: width(3) }}>
                        <SVGIcons.right />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ marginHorizontal: width(3), marginTop: width(3) }}>
                <SmallText size={2.6}>If you lose access to this device, your funds will be lost, unless you
                    back up!</SmallText>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <SmallText fontFamily={FontFamily.poppinsSemiBold}>Are you sure would like to delete this wallet?</SmallText>
                        <View style={{ marginBottom: width(6) }}>
                            <SmallText size={3}>Make sure you have backup of your wallet.</SmallText>
                        </View>
                        <View style={{ flexDirection: 'row', bottom: 0, position: 'absolute', right: width(10) }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}>
                                <SmallText color={AppColors.primary}>Cancel</SmallText>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onpress}
                                style={{ marginLeft: width(4) }}>
                                <SmallText color={AppColors.primary}>OK</SmallText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>

    );
};

export default WalletDetail;
