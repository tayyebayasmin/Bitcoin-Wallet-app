import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import {  TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';

const Preferences = ({ navigation }: NativeStackScreenProps<any>) => {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScreenWrapper>
            <View style={{ backgroundColor: AppColors.primary, padding: width(3.5), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                >
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <View style={{ marginLeft: width(3) }}>
                    <SmallText size={(5)} color={AppColors.white}> Preferences</SmallText>
                </View>
    
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate(ScreenNames.CURRENCY)}>
                <View style={{ flexDirection: 'row', marginTop: width(5), marginLeft: width(5) }}>
                    <View style={{ flexDirection: 'column', marginLeft: width(5) }}>
                        <SmallText>Currency</SmallText>
                        <SmallText size={3}>USD</SmallText>
                    </View>
                    <View style={{ right: width(5), position: 'absolute' }}>
                        <SVGIcons.rightarrow />
                    </View>
                </View>
            </TouchableOpacity>
        </ScreenWrapper >
    );
};

export default Preferences;
