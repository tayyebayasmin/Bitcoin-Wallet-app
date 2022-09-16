import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets, MyMainnets, priceAlert, priceMainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';

const PriceAlerts = ({ navigation }: NativeStackScreenProps<any>) => {
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
                    <SmallText size={(5)} color={AppColors.white}> Price Alerts</SmallText>
                </View>
                <View style={{ right: width(4), position: 'absolute' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreenNames.SELECTASSET)}>
                        <LargeText size={8} color={AppColors.white}>+</LargeText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>

                <SmallText size={4.4} textStyles={styles.txt}>Price Alerts</SmallText>
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
            <View style={{ marginHorizontal: width(5), marginVertical: width(1) }}>
                <SmallText>Get alerts significant price changes of your favourite crypto currencies.</SmallText>
            </View>
            {
                isEnabled &&
                priceAlert.map((item) => {
                    return (
                        <View style={{ flexDirection: 'row', marginTop: width(5), marginLeft: width(5) }}>
                            <item.icon />
                            <View style={{ flexDirection: 'column', marginLeft: width(5) }}>
                                <SmallText>{item.name}</SmallText>
                                <View style={{ flexDirection: 'row' }}>
                                    <SmallText size={3}>${item.price}</SmallText>
                                    <SmallText size={3} color={AppColors.primary}>  +{item.percent}%</SmallText>
                                </View>
                            </View>

                        </View>

                    )
                })
            }

        </ScreenWrapper >
    );
};

export default PriceAlerts;
