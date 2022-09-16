import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar, Button } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';
import { FontFamily } from '~assets/fonts';

const WalletConnect = ({ navigation }: NativeStackScreenProps<any>) => {
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
                            <SVGIcons.error/>
                  </TouchableOpacity>
                </View>
            </View>
            <View
            style={{margin:width(4)}}>
          <SmallText>
            Connect your wallet with Wallet Connect to make transactions
          </SmallText>
          </View>
            <Button
                    containerStyle={styles.button}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={()=>{navigation.navigate(ScreenNames.STARTED)}}                     
                >
                    New Connection
                </Button>
        </ScreenWrapper >
    );
};

export default WalletConnect;
