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

const Security = ({ navigation }: NativeStackScreenProps<any>) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const [signing, setIsSigning] = useState(true);

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
                    <SmallText size={(5)} color={AppColors.white}> Security</SmallText>
                </View>
                <View style={{ right: width(4), position: 'absolute' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreenNames.WALLETSETUP)}>
                        <SVGIcons.error />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container,styles.extra]}>

                <SmallText size={4.4} textStyles={styles.txt}>Passcode</SmallText>
                <View style={{ right: 0, position: "absolute" }}>
                    <Switch
                        trackColor={{ false: "#767577", true: AppColors.primary }}
                        style={{ left: width(1) }}
                        thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>

            </View>
            <View style={[styles.container,styles.extra]}>

                <SmallText size={4.4} textStyles={styles.txt}>Auto-Lock</SmallText>
                <View style={{ right: 0, position: "absolute" }}>
                    <SmallText>Immediate</SmallText>

                </View>

            </View>
            <View style={[styles.container,styles.extra]}>

                <SmallText size={4.4} textStyles={styles.txt}>Lock Method</SmallText>
                <View style={{ right: 0, position: "absolute" }}>
                    <SmallText>Passcode / Biometric</SmallText>

                </View>

            </View>
            <View style={{ margin: width(4) }}>
                <SmallText color={AppColors.primary}>
                    Ask Authentication for
                </SmallText>
            </View>
            <View style={styles.container}>

                <SmallText size={4.4} textStyles={styles.txt}>Transaction Signing</SmallText>
                <View style={{ right: 0, position: "absolute" }}>
                    <Switch
                        trackColor={{ false: "#767577", true: AppColors.primary }}
                        style={{ left: width(1) }}
                        thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=>{setIsSigning(!signing)}}
                        value={signing}
                    />

                </View>

            </View>
        </ScreenWrapper >
    );
};

export default Security;
