import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from "react-native";
import SVGIcons, { AddSVG } from "~assets/svg";
import { SmallText } from "~components/text";
import styles from "./styles";
import { ScreenNames } from '~routes';
import { Button } from "~components";
import { FontFamily } from "~assets/fonts";
interface Props {
    OnPressDiscover?(): void;
    OnPressNFTs?(): void;
    OnPressSwap?(): void;
    OnPressWallet?(): void;

}
const BottomBar = ({
    OnPressDiscover,
    OnPressNFTs,
    OnPressSwap,
    OnPressWallet
}:Props) => {
    return (
        <>
            <View style={styles.iconRow}>
                    <TouchableOpacity
                    onPress={OnPressWallet}
                    >
                    <View style={{ alignItems: "center", justifyContent: 'center', alignContent: 'center' }}>
                        <SVGIcons.wallet />
                        <SmallText size={3} textAlign='center'>Wallet</SmallText>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={OnPressSwap}>
                    <View style={{ alignItems: "center", justifyContent: 'center', alignContent: 'center' }}>
                        <SVGIcons.swapbellow />
                        <SmallText size={3} textAlign='center'>Swap</SmallText>
                    </View>
                    </TouchableOpacity>

                <TouchableOpacity
                onPress={OnPressNFTs}>
                <View style={{alignItems: "center", justifyContent: 'center', alignContent: 'center' }}>
                    <SVGIcons.NFTs />
                    <SmallText size={3} textAlign='center'>NFTs</SmallText>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={OnPressDiscover}>
                    <View style={{alignItems: "center", justifyContent: 'center', alignContent: 'center' }}>
                        <SVGIcons.discover />
                        <SmallText size={3} textAlign='center'>Discover</SmallText>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};



export default BottomBar;