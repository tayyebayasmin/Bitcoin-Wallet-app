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

const AddTokens = ({ navigation }: NativeStackScreenProps<any>) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(Mainnets);
    const [toggles, setToggles] = useState([
        ['text 1', false],
        ['text 2', false],
        ['text 3', false],
        ['text 4', false],
        ['text 5', false],
        ['text 6', false],
        ['text 7', false],
        ['text 8', false],
        ['text 9', false],
        ['text 10', false],
        ['text 11', false],
        ['text 12', false],
        ['text 13', false],
        ['text 14', false],
        ['text 15', false],
        ['text 15', false],
    ])
    const handleChange = (index) => {
        const newState = [...toggles]
        newState[index] = [newState[index][0], !newState[index][1]]
        setToggles(newState)
      }

    const searchFilterFunction = (text: string) => {
        if (text) {

            const newData = Mainnets.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(Mainnets);
            setSearch(text);
        }
    };
    return (
        <ScreenWrapper>
            {/* <View style={{height:height(100)}}> */}
            <View style={{ backgroundColor: AppColors.primary, padding: width(3), flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <SVGIcons.leftArrow />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    onChangeText={searchFilterFunction}
                    placeholder="Search for Mainnet"
                    placeholderTextColor={AppColors.white}
                />

                <View style={{ right: width(4), position: 'absolute' }}>
                    <TouchableOpacity>
                        <LargeText size={8} color={AppColors.white}>+</LargeText>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {filteredDataSource.map((Mainnet,index) => {
                    console.log(toggles[index][1])
                    return (
                        <View style={styles.container}>

                            <Mainnet.icon />
                            <SmallText size={4.4} textStyles={styles.txt}>{Mainnet.name}</SmallText>
                            <View style={{ right: 0, position: "absolute" }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: AppColors.primary }}
                                    style={{ left: width(1) }}
                                    thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => handleChange(index)}
                                    value={toggles[index][1]}

                                // t=
                                />

                            </View>

                        </View>
                    )
                })

                }
            </ScrollView>
            <BottomBar
                OnPressWallet={() => navigation.navigate(ScreenNames.HOMESCREEN)}
                OnPressSwap={() => navigation.navigate(ScreenNames.SWAPSCREEN)}
                OnPressNFTs={() => navigation.navigate(ScreenNames.NFT_Screen)}
                OnPressDiscover={() => navigation.navigate(ScreenNames.DISCOVERSCREEN)}
            />
        </ScreenWrapper >
    );
};

export default AddTokens;
