import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';
import { priceMainnets, priceMainnetsAll } from '~utills/DummyData';

const Currency = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <>
            <View style={{ backgroundColor: AppColors.primary, padding: width(3.5), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.PREFERENCES)}
                >
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <View style={{ marginLeft: width(3) }}>
                    <SmallText size={(5)} color={AppColors.white}> Currency</SmallText>
                </View>

            </View>
            <ScrollView>
                <View style={{ margin: width(4) }}>
                    <SmallText color={AppColors.primary}>Popular</SmallText>
                </View>
                {
                    priceMainnets.map((item) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(ScreenNames.BUYCOIN, {
                                        currencyname: { item }

                                    })
                                }
                            }
                        >
                                <View style={{ margin: width(2), marginHorizontal: width(4) }}>
                                    <SmallText>{item.FULLNAME}</SmallText>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={{ margin: width(4) }}>
                    <SmallText color={AppColors.primary}>All</SmallText>
                </View>
                {
                    priceMainnetsAll.map((item) => {
                        return (
                            <TouchableOpacity>
                                <View style={{ margin: width(2), marginHorizontal: width(4) }}>
                                    <SmallText>{item}</SmallText>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </>
    );
}

export default Currency;
