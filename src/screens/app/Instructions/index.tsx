import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { FontFamily } from '~assets/fonts';
import SVGIcons from '~assets/svg';
import { Button } from '~components';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { width } from '~utills/Dimensions';
import styles from './styles';

const InstructionScreen = ({ navigation }: NativeStackScreenProps<any>) => {

    return (
        <ScreenWrapper 
        scrollType="scroll" 
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <SVGIcons.backArrow />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <SVGIcons.smallBitcoin />
                    </View>
                </View>
                <LargeText size={6} textStyles={styles.TopText} fontFamily={FontFamily.poppinsSemiBold}>Help us improve COINSAFE</LargeText>
                <SmallText size={3.5} textAlign='justify' textStyles={styles.text1}>COINSAFE would like to gather basic usage data
                    to better understand how our users interact with
                    the mobile app. This data will be used to
                    continually improve the usability and user
                    experience of our product. </SmallText>

                <SmallText size={3.5} textStyles={styles.text2}>
                    COINSAFE will...
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2}>
                    <SVGIcons.trueSVG />  Always allow you to opt-out via Settings
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2} >
                    <SVGIcons.trueSVG />  Send anonymized click & pageview events
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2}>
                    <SVGIcons.trueSVG />  Send country, region, city data
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2}>
                    <SVGIcons.falseSVG />  Never collect keys, addresses, transactions,
                    balances, hashes, or any personal information
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2}>
                    <SVGIcons.falseSVG />  Never collect your IP address
                </SmallText>
                <SmallText size={3.5} textStyles={styles.text2} >
                    <SVGIcons.falseSVG />  Never sell data for profit. Ever!
                </SmallText>
                <SmallText size={3.5} textAlign='justify' textStyles={styles.text3} >
                    This data is aggregated to our privacy practices,
                    Please see our Privacy Policy <Text style={{ textDecorationLine: 'underline' }}> here</Text>.
                </SmallText>
                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginVertical: width(5) }}>
                    <Button
                        variant='Null'
                        containerStyle={styles.button}
                        textStyle={{ color: AppColors.primary }}
                    onPress={() =>navigation.navigate(ScreenNames.STARTED)}
                    >
                        No Thanks
                    </Button>
                    <Button
                        containerStyle={styles.button}
                        textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={() => { navigation.navigate(ScreenNames.SETUP_PASSCODE) }}
                    >
                        I Agree
                    </Button>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default InstructionScreen;