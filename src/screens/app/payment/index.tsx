import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets, MyMainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';

const PaymentScreen = ({ navigation,route }: NativeStackScreenProps<any>) => {
   
    const {coinprice}=route.params

    return (
        <ScreenWrapper>
            <View style={{ backgroundColor: AppColors.primary, padding: width(4), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <SVGIcons.cross2 />
                </TouchableOpacity>
                <SmallText color={AppColors.white}>www.binancecnt.com</SmallText>
                <TouchableOpacity>
                    <SVGIcons.menu />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: width(3) }}>
                <SmallText size={5}>Buy BTC</SmallText>
                <TouchableOpacity>
                    <SVGIcons.menu2 />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: width(6) }}>
                <SVGIcons.location />
                <View style={{ marginHorizontal: width(2) }}>
                    <SmallText>Austrailia</SmallText>
                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: width(2) }}>
                        <SVGIcons.more />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.blackbox}>
            
                <View style={{ backgroundColor: AppColors.primary, borderRadius: width(100), width: width(14), alignItems: 'center', justifyContent: 'center' }}>
                    <LargeText size={8} color={AppColors.white} textAlign='center'>$</LargeText>
                </View>
                <View style={{ marginHorizontal: width(4) }}>
                    <SmallText color={AppColors.grey50}>Spend</SmallText>
                    <View style={{ flexDirection: 'row' }}>
                        <SmallText>USD  </SmallText>
                        <TouchableOpacity>
                        <View style={{ marginTop: width(2) }}>
                            <SVGIcons.more />
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{right:width(4),position:'absolute'}}>
                <LargeText>{coinprice}</LargeText>
                </View>
            </View>
            <View style={styles.blackbox}>
            
            <View style={{ backgroundColor: AppColors.primary, borderRadius: width(100), width: width(14), alignItems: 'center', justifyContent: 'center',padding:width(3.2) }}>
                <SVGIcons.paymethod/>
            </View>
            <View style={{ marginHorizontal: width(4) }}>
                <SmallText color={AppColors.grey50}>Pay with</SmallText>
                <View style={{ flexDirection: 'row' }}>
                    <SmallText size={3} color={AppColors.grey50}>Select a payment method</SmallText>
                </View>
            </View>
            <View style={{right:width(4),position:'absolute'}}>
            <SVGIcons.rightarrow/>
            </View>
        </View>
        </ScreenWrapper >
    );
};

export default PaymentScreen;
