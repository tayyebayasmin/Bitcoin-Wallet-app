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

const AddTokens = ({ navigation }: NativeStackScreenProps<any>) => {
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
                {filteredDataSource.map((Mainnet) => {
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
                                    onValueChange={toggleSwitch}
                                    value={Mainnet.enabled}
                                />

                            </View>

                        </View>
                    )
                })

                }
            </ScrollView>

            <BottomBar />
            {/* </View> */}
        </ScreenWrapper >
    );
};

export default AddTokens;
