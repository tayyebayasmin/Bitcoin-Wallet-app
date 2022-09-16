import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Categories, InterestingCollections, Mainnets, MyMainnets, NftMainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { FontFamily } from '~assets/fonts';
import { ScreenNames } from '~routes';

const NftScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(Mainnets);
    const searchFilterFunction = (text: string) => {
        if (text) {

            const newData = Mainnets.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            console.log(newData)
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(Mainnets);
            setSearch(text);
        }
    };

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScreenWrapper>
            {/* <View style={{height:height(100)}}> */}
            <View style={{ backgroundColor: AppColors.primary, padding: width(4), flexDirection: 'row', alignItems: 'center' }}>
                <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.white}>
                    NFT
                </SmallText>
            </View>
            <View style={{ marginHorizontal: width(4) }}>
                <View style={{ alignSelf: 'center' }}>
                    <SVGIcons.nftimage />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                >
                    <View style={{ flexDirection: 'row' }}>
                        {
                            NftMainnets.map((item) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{
                                            marginRight: width(3), width: width(35), padding: width(1), flexDirection: 'row', alignItems: 'center', borderColor: AppColors.primary, borderWidth: width(0.2), borderRadius: width(9)
                                        }}>
                                            <item.icon />
                                            <View style={{ marginHorizontal: width(1), marginRight: width(3) }}>
                                                <SmallText size={3.5}>{item.name}</SmallText>
                                            </View>
                                            <SVGIcons.bluearrow />

                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={{ marginVertical: width(3) }}>
                    <SmallText size={5} textAlign="left">
                        Interesting Collections
                    </SmallText>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                >
                    <View style={{ flexDirection: 'row' }}>
                        {
                            InterestingCollections.map((item) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{ width: width(25), alignItems: 'center' }}>
                                            <item.icon />
                                            <View style={{ marginHorizontal: width(1), marginRight: width(3) }}>
                                                <SmallText size={3} textAlign='center'>{item.name}</SmallText>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={{ marginVertical: width(3), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SmallText size={5} textAlign="left">
                        Categories
                    </SmallText>
                    <TouchableOpacity>
                        <SmallText textAlign="left" color={AppColors.primary}>
                            SEE ALL
                        </SmallText>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    <View style={{ flexDirection: 'row' }}>
                        {
                            Categories.map((item) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={{ width: width(30), alignItems: 'center', marginRight: width(4) }}>
                                            <item.icon />
                                            <View style={{ marginHorizontal: width(1), marginRight: width(3) }}>
                                                <SmallText size={4.5} textAlign='center'>{item.name}</SmallText>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>

            </View>
            <BottomBar
                OnPressWallet={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                OnPressSwap={() => navigation.navigate(ScreenNames.SWAPSCREEN)}
                OnPressNFTs={() => navigation.navigate(ScreenNames.NFT_Screen)}
                OnPressDiscover={() => navigation.navigate(ScreenNames.DISCOVERSCREEN)}
            />
        </ScreenWrapper >
    );
};

export default NftScreen;
