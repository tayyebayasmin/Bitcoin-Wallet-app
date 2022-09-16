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
import { Node, priceMainnets, priceMainnetsAll } from '~utills/DummyData';

const NodeSetting = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <>
            <View style={{ backgroundColor: AppColors.primary, padding: width(3.5), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                >
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <View style={{ marginLeft: width(3) }}>
                    <SmallText size={(5)} color={AppColors.white}> Node Settings</SmallText>
                </View>

            </View>
            <ScrollView>
            {
                Node.map((item) => {
                    return (
                        <View style={{margin:width(2.5),marginHorizontal:width(4)}}>
                            <SmallText>{item}</SmallText>
                        </View>
                    )
                })
            }
           
            </ScrollView>
        </>    
    );
}

export default NodeSetting;
