import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { TextInput, TouchableOpacity, View } from 'react-native';
import SVGIcons from '~assets/svg';
import { height, width } from '~utills/Dimensions';
import { MediumText, SmallText } from '~components/text';
import { FontFamily } from '~assets/fonts';


const SendScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={{ width: width(100), backgroundColor: AppColors.primary, padding: width(3), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SVGIcons.leftArrow />

                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        // onChangeText={searchFilterFunction}
                        placeholder="Search - Send"
                        placeholderTextColor={AppColors.white}
                    />

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: height(30), }}>

                    <SmallText size={4.2}>No assets found</SmallText>
                    <TouchableOpacity>
                        <MediumText size={5} >Buy Cryptocurrency</MediumText>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default SendScreen;
