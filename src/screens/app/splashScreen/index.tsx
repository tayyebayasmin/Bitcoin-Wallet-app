import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';
import styles from './styles';


const SplashScreen = ({ navigation }: NativeStackScreenProps<any>) => {
setTimeout(() => {
    navigation.replace(ScreenNames.WELCOME)
}, 3000);
    return (
        <ScreenWrapper>
            <View style={styles.WelcomeText}>
            <SVGIcons.bitcoin/>
            </View>
        </ScreenWrapper>
    );
};

export default SplashScreen;