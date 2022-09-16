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

const PushNotification = ({ navigation }: NativeStackScreenProps<any>) => {
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
                    <SmallText size={(5)} color={AppColors.white}> Push Notification</SmallText>
                </View>
            </View>
            <View style={styles.container}>

                <SmallText size={4.4} textStyles={styles.txt}>Allow Push Notification</SmallText>
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
            {isEnabled &&
            <>
                <View style={styles.container}>

                    <SmallText size={4.4} textStyles={styles.txt}>Sent and Receive</SmallText>
                    <View style={{ right: 0, position: "absolute" }}>
                        <Switch
                            trackColor={{ false: "#767577", true: AppColors.primary }}
                            style={{ left: width(1) }}
                            thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => { setIsSigning(!signing) }}
                            value={signing}
                        />
                    </View>
                </View>
                <View style={{marginHorizontal:width(7)}}>
                <SmallText size={3}>
                    You will be notified for sent and received transactions.
                </SmallText>
                </View>
                </>
            }
        </ScreenWrapper >
    );
};

export default PushNotification;
