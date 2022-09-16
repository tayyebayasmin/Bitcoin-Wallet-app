import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { NftMainnets, StakingData1, StakingData2 } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { FontFamily } from '~assets/fonts';
import { ScreenNames } from '~routes';

const DiscoverScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <>
            <View style={{ backgroundColor: AppColors.primary, padding: width(4), flexDirection: 'row', alignItems: 'center' }}>
                <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.white}>
                    Discover
                </SmallText>
            </View>
            <ScreenWrapper
                scrollType='scroll'
            >
                {/* <View style={{height:height(100)}}> */}
                <View style={{ margin: width(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SmallText color={AppColors.primary} textAlign="left">
                        Staking
                    </SmallText>
                    <TouchableOpacity>
                        <SmallText textAlign="left" color={AppColors.primary}>
                            SEE ALL
                        </SmallText>
                    </TouchableOpacity>
                </View>
                {StakingData1.map((item) => {
                    return (
                        <View style={styles.mainContainer}>
                            <item.icon />
                            <View style={styles.textContainer}>
                                <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold}>{item.name} ({item.secondName})</SmallText>

                                <View style={{ flexDirection: 'row' }}>
                                    <SmallText color={AppColors.grey50}>APR: </SmallText>
                                    <SmallText color={AppColors.primary}>{item.percent}</SmallText>
                                </View>
                            </View>
                        </View>
                    )
                })
                }
                <View style={{ margin: width(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SmallText color={AppColors.primary} textAlign="left">
                        Staking
                    </SmallText>
                    <TouchableOpacity>
                        <SmallText textAlign="left" color={AppColors.primary}>
                            SEE ALL
                        </SmallText>
                    </TouchableOpacity>
                </View>
                {StakingData2.map((item) => {
                    return (
                        <View style={[styles.mainContainer, styles.staking]}>
                            <item.icon />
                            <View style={styles.textContainer}>
                                <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold}>{item.name} ({item.secondName})</SmallText>
                            </View>
                            <View style={{ right: width(5), position: "absolute" }}>
                                <SmallText>${item.price}</SmallText>
                                <SmallText color='red'>-{item.percent}</SmallText>
                            </View>
                        </View>
                    )
                })
                }
                <View style={{ margin: width(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SmallText color={AppColors.primary} textAlign="left">
                        Lending / Borrowing
                    </SmallText>
                    <TouchableOpacity>
                        <SmallText textAlign="left" color={AppColors.primary}>
                            SEE ALL
                        </SmallText>
                    </TouchableOpacity>
                </View>
                {StakingData2.map((item) => {
                    return (
                        <View style={[styles.mainContainer, styles.staking]}>
                            <item.icon />
                            <View style={styles.textContainer}>
                                <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold}>{item.name} ({item.secondName})</SmallText>
                            </View>
                            <View style={{ right: width(5), position: "absolute" }}>
                                <SmallText>${item.price}</SmallText>
                                <SmallText color='red'>-{item.percent}</SmallText>
                            </View>
                        </View>
                    )
                })
                }
                <View style={{ margin: width(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SmallText color={AppColors.primary} textAlign="left">
                        Smart Chain / BCS
                    </SmallText>
                    <TouchableOpacity>
                        <SmallText textAlign="left" color={AppColors.primary}>
                            SEE ALL
                        </SmallText>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: width(20) }}>
                    {StakingData2.map((item) => {
                        return (
                            <View style={[styles.mainContainer, styles.staking]}>
                                <item.icon />
                                <View style={styles.textContainer}>
                                    <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold}>{item.name} ({item.secondName})</SmallText>
                                </View>
                                <View style={{ right: width(5), position: "absolute" }}>
                                    <SmallText>${item.price}</SmallText>
                                    <SmallText color='red'>-{item.percent}</SmallText>
                                </View>
                            </View>
                        )
                    })
                    }
                </View>
            </ScreenWrapper >
            <BottomBar
                OnPressWallet={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                OnPressSwap={() => navigation.navigate(ScreenNames.SWAPSCREEN)}
                OnPressNFTs={() => navigation.navigate(ScreenNames.NFT_Screen)}
                OnPressDiscover={() => navigation.navigate(ScreenNames.DISCOVERSCREEN)}
            />
        </>
    );
};

export default DiscoverScreen;
