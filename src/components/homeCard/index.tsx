// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import SVGIcons from "~assets/svg";
import { SmallText } from "~components/text";
import styles from "./styles";
import { FontFamily } from "~assets/fonts";
import { ScreenWrapper } from "react-native-screen-wrapper";
interface Props {
    onPressNotification?(): void;
    onPressScan?(): void;
    onPressSend?(): void;
    onPressRecieve?(): void;
    onPressBuy?(): void;
    onPressSwap?(): void;
    onPressSetting?(): void;
    iconRow?:Boolean;
    profileShow?:Boolean
}
const HomeCard = ({
    onPressNotification,
    onPressBuy,
    onPressScan,
    onPressRecieve,
    onPressSend,
    onPressSwap,
    onPressSetting,
    iconRow = true,
    profileShow= true
}: Props) => {

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={onPressSetting}>
                        <SVGIcons.settings />
                    </TouchableOpacity>
                   { profileShow &&
                    <View style={styles.profile}>
                        <SVGIcons.profile />
                        <SmallText size={4}>My Wallet</SmallText>
                        <SmallText size={6} fontFamily={FontFamily.poppinsSemiBold}>$0.00</SmallText>
                    </View>
                    }
                    <TouchableOpacity
                        onPress={onPressNotification}>
                        <SVGIcons.notification />
                    </TouchableOpacity>
                </View>
                {iconRow &&
                    <View style={styles.iconRow}>

                        <TouchableOpacity
                            onPress={onPressScan}
                        >

                            <View style={styles.icon}>
                                <SVGIcons.scan />
                            </View>
                            <SmallText size={3} textAlign='center'>Scan</SmallText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onPressSend}

                        >
                            <View style={styles.icon}>
                                <SVGIcons.send />
                            </View>
                            <SmallText size={3} textAlign='center'>Send</SmallText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onPressRecieve}
                        >
                            <View style={styles.icon}>
                                <SVGIcons.recieve />
                            </View>
                            <SmallText size={3} textAlign='center'>Receive</SmallText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onPressBuy}>
                            <View style={styles.icon}>
                                <SVGIcons.buy />
                            </View>
                            <SmallText size={3} textAlign='center'>Buy</SmallText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onPressSwap}>
                            <View style={styles.icon}>
                                <SVGIcons.swap />
                            </View>
                            <SmallText size={3} textAlign='center'>Swap</SmallText>
                        </TouchableOpacity>
                    </View>
                }
            </View>

        </ScreenWrapper>
    );
};



export default HomeCard;