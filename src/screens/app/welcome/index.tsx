import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { FontFamily } from '~assets/fonts';
import SVGIcons from '~assets/svg';
import { Button } from '~components';
import { MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import styles from './styles';

const WelcomeScreen = ({ navigation }: NativeStackScreenProps<any>) => {

    return (
        <ScreenWrapper>
            <View style={styles.container}>
            <MediumText size={5} textStyles={styles.WelcomeText}>Welcome to <Text style={{fontFamily:FontFamily.poppinsSemiBold}}>
            COINSAFE</Text></MediumText>
                <SmallText size={3.2} textAlign='center' textStyles={styles.text1}> Trusted by millions, <Text style={{fontFamily:FontFamily.poppinsSemiBold}}>
            COINSAFE</Text> is a secure wallet
                    making the world of web3 accessible to all</SmallText>
                <View style={styles.logo}>
                    <SVGIcons.bitcoin />
                </View>
                <Button
                    containerStyle={styles.button}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={()=>{navigation.navigate(ScreenNames.STARTED)}}                     
                >
                    Get Started
                </Button>

            </View>
        </ScreenWrapper>
    );
};

export default WelcomeScreen;