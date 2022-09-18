import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { TouchableOpacity, View, Text, Pressable } from 'react-native';
import SVGIcons from '~assets/svg';
import { height, width } from '~utills/Dimensions';
import { LargeText, MediumText, SmallText } from '~components/text';
import { FontFamily } from '~assets/fonts';
import { Button } from '~components';
import { ScreenNames } from '~routes';


const BuyCoin = ({ navigation, route }: NativeStackScreenProps<any>) => {
    const {name, nickname,currencyname } = route.params
    const [showcurrency, setShowCurrency] = useState('USD')
    const [showprice, setPrice] = useState('100')
    const PriceHandler = (price) => {
        setPrice(`${showprice}` + price)
    }
    return (
        <ScreenWrapper
            scrollViewProps={{ showsVerticalScrollIndicator: false, }}
            scrollType='scroll'>
            <View style={styles.container}>
                <View style={{ width: width(100), padding: width(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <SVGIcons.backblue />

                    </TouchableOpacity>
                    <SmallText size={4.5} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.black} >Buy {nickname}</SmallText>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate(ScreenNames.CURRENCY)}}>
                    <View style={{ alignItems: 'center', backgroundColor: '#D5EBFE', borderRadius: width(5), padding: width(2), width: width(17) }}>
                        <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.primary} >
                            {currencyname==undefined ? showcurrency: currencyname.item.short}
                        </SmallText>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: height(30), justifyContent: 'center' }}>
                    <SmallText textAlign='center' size={10} fontFamily={FontFamily.poppinsSemiBold}> {currencyname==undefined ? '$': currencyname.item.sign} {showprice}</SmallText>
                    <SmallText size={5}>~0.006685 {nickname}</SmallText>
                </View>
                <View style={styles.middlebox}>

                    <SVGIcons.binance />
                    <SmallText textAlign='center' textStyles={styles.text}>Binance Connect</SmallText>
                    <View style={{ flexDirection: 'column', right: width(3), position: 'absolute' }}>
                        <SmallText size={3.3}>0.006451 {nickname}</SmallText>
                        <View style={{ backgroundColor: "#3AA44B", width: width(24), borderRadius: width(1) }}>
                            <SmallText color={AppColors.white} textAlign='center'>Best rate</SmallText>
                        </View>
                    </View>
                </View>
                <View style={styles.count} >
                    <TouchableOpacity
                        onPress={() => PriceHandler(1)}
                    >
                        <View style={styles.box}>
                            <LargeText>1</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(2)}>
                        <View style={styles.box}>
                            <LargeText>2</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(3)}
                    >
                        <View style={styles.box}>
                            <LargeText>3</LargeText>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.count} >
                    <TouchableOpacity
                        onPress={() => PriceHandler(4)}>
                        <View style={styles.box}>
                            <LargeText>4</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(5)}>
                        <View style={styles.box}>
                            <LargeText>5</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(6)}>
                        <View style={styles.box}>
                            <LargeText>6</LargeText>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.count} >
                    <TouchableOpacity
                        onPress={() => PriceHandler(7)}>
                        <View style={styles.box}>
                            <LargeText>7</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(8)}>
                        <View style={styles.box}>
                            <LargeText>8</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(9)}>
                        <View style={styles.box}>
                            <LargeText>9</LargeText>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.count} >
                    <TouchableOpacity
                        onPress={() => PriceHandler('.')}>
                        <View style={styles.box}>
                            <LargeText>.</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => PriceHandler(0)}>
                        <View style={styles.box}>
                            <LargeText>0</LargeText>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setPrice('')}>
                        <View style={[styles.box, styles.cross]}>
                            <SVGIcons.cross />
                        </View>
                    </TouchableOpacity>
                </View>
                <Button
                    containerStyle={styles.button}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={() => { navigation.navigate(ScreenNames.PAYMENT,{
                        coinprice:showprice
                    }) }}
                >
                    Next
                </Button>

            </View>
        </ScreenWrapper>
    );
};

export default BuyCoin;
