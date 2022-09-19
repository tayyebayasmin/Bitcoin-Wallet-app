import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { BottomBar } from '~components';
import { LargeText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { Mainnets, MyMainnets } from '~utills/DummyData';
import SVGIcons from '~assets/svg';
import { ScreenNames } from '~routes';

const SelectAsset = ({ navigation }: NativeStackScreenProps<any>) => {
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


    return (
        <ScreenWrapper>
            <View style={{ backgroundColor: AppColors.primary, padding: width(3), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    onChangeText={searchFilterFunction}
                    placeholder="Search - Select Asset"
                    placeholderTextColor={AppColors.white}
                />


            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {filteredDataSource.map((Mainnet, i) => {
                    // console.log(Mainnet)
                    return (

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(ScreenNames.PRICEALERTS,
                                {
                                    item:Mainnet
                                }
                                )
                            }
                        >
                            <View style={styles.container}>

                                <Mainnet.icon />
                                <SmallText size={4.4} textStyles={styles.txt}>{Mainnet.name}</SmallText>
                                <View style={{ right: 0, position: "absolute" }}>
                                    <SmallText>{Mainnet.recieve} {Mainnet.Nickname}</SmallText>

                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                })

                }
            </ScrollView>

        </ScreenWrapper >
    );
};

export default SelectAsset;
