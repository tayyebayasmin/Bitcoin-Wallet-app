import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import SVGIcons from '~assets/svg';
import { height, width } from '~utills/Dimensions';
import { MediumText, SmallText } from '~components/text';
import { FontFamily } from '~assets/fonts';


const RecieveCoin = ({ navigation,route }: NativeStackScreenProps<any>) => {
    const {name,nickname} =route.params
    return (
        <ScreenWrapper
            scrollViewProps={{ showsVerticalScrollIndicator: false, }}
            scrollType='scroll'>
            <View style={styles.container}>
                <View style={{ width: width(100), backgroundColor: AppColors.primary, padding: width(5), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SVGIcons.leftArrow />

                    </TouchableOpacity>
                    <View style={{ width: width(80), justifyContent: 'center', marginHorizontal: width(5), marginTop: width(1) }}>
                        <SmallText size={4.5} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.white} >Recieve {nickname}</SmallText>
                    </View>
                </View>
                <View style={[styles.maincontainer,]}>
                    <SVGIcons.smallBitcoin />
                    <View style={{ marginVertical: width(8) }}>
                        <SVGIcons.scanner />
                    </View>
                    <SmallText textAlign='center'>bbsdabknksnduaifnknmmc
                        ndkn99iad09</SmallText>
                </View>
                <SmallText textAlign='center'>Send only {name} ({nickname}) to this address.</SmallText>
                <SmallText textAlign='center'>Sending any other coins may result in
                    permanent loss.</SmallText>
                <View style={{ flexDirection: 'row', marginVertical:width(3) }}>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <SVGIcons.copy />
                        </View>
                        <SmallText textAlign='center' color={AppColors.primary} >Copy</SmallText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <SVGIcons.setAmount />
                        </View>
                        <SmallText textAlign='center' color={AppColors.primary} >Set Amount</SmallText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <SVGIcons.Share />
                        </View>
                        <SmallText textAlign='center' color={AppColors.primary} >Share</SmallText>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default RecieveCoin;
