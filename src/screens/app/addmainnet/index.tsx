import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, TextInput, View } from 'react-native';
import SVGIcons, { AddSVG, WifiSVG } from '~assets/svg';
import { LargeText, MediumText, SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import { FontFamily } from '~assets/fonts';
import { ScreenNames } from '~routes';
import { Button, CongratsModal, MainnetCard } from '~components';
import { Mainnets } from '~utills/DummyData';

const AddMainnet = ({ navigation }: NativeStackScreenProps<any>) => {
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState(Mainnets);
    
    const searchFilterFunction = (text:string) => {
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
          setFilteredDataSource( Mainnets);
          setSearch(text);
        }
      };
  
    const onPressConfirm = () => {
        // setModalVisible(!modalVisible)
        navigation.navigate(ScreenNames.HOMESCREEN)

    }
    return (
        <ScreenWrapper scrollViewProps={{
            showsVerticalScrollIndicator: false,
        }}
            scrollType="scroll"
        >
            <View style={styles.container}>
                <View style={{ marginTop: width(7), alignSelf: 'center' }}>
                    <SVGIcons.CoinSafe />
                </View>
                <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold} textStyles={styles.text1}>Add Mainnet</SmallText>
                <SmallText>COINSAFE support 90 mainnets</SmallText>
                <View style={styles.container2}>
                    <SVGIcons.searchbar />
                    <TextInput
                        style={styles.input}
                        onChangeText={searchFilterFunction}
                        placeholder="Search for Mainnet"

                    />
                </View>
                <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold} textStyles={styles.toptext} >Top</SmallText>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: width(100) }}>
                    {
                        filteredDataSource.map((mainnet, i) => {
                            return (
                                <MainnetCard
                                    key={i + 1}
                                    name={mainnet.name}
                                    icon={<mainnet.icon />}
                                // onPress={}
                                />
                            );
                        })
                    }
                </View>
                <Button
                    containerStyle={styles.button}
                    textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
                    onPress={onPressConfirm}
                >
                    Confirm
                </Button>
                {/* <CongratsModal /> */}
            </View>
        </ScreenWrapper >
    );
};

export default AddMainnet;
