import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import SVGIcons, { AddSVG } from "~assets/svg";
import { SmallText } from "~components/text";
import styles from "./styles";
import { ScreenNames } from '~routes';
import { Button } from "~components";
import { FontFamily } from "~assets/fonts";

const CongratsModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                
                <View style={styles.centeredView}>
                    <SVGIcons.congrat/>
                    <SmallText size={6} fontFamily={FontFamily.poppinsSemiBold}>Congratulations!</SmallText>
                    <SmallText size={5}>You have created a wallet.</SmallText>
                    <Button
                        containerStyle={styles.button1}
                        textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                        onPress={() => { setModalVisible(!modalVisible) }}
                    >
                        OK
                    </Button>
                </View>

            </Modal>
        </>
    );
};



export default CongratsModal;