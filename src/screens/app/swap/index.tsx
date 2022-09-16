import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { BottomBar, Button, HomeCard } from '~components';
import SVGIcons from '~assets/svg';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import { FontFamily } from '~assets/fonts';
import { height, width } from '~utills/Dimensions';
import modal, { ReactNativeModal } from "react-native-modal";


const Swap = ({ navigation }: NativeStackScreenProps<any>) => {
  const [SettingmodalVisible, setSettingModalVisible] = useState(false);
  const [touchedonSwap, setTouchedonSwap] = useState(true)
  const [touchedExchange, setTouchedExchange] = useState(false)
  const OnPressNotification = () => {
    navigation.navigate(ScreenNames.NOTIFICATION)
  }
  const onPressSetting = () => {
    setSettingModalVisible(!SettingmodalVisible)
  }
  const toucheTokens = () => {

    setTouchedExchange(!touchedExchange)
    setTouchedonSwap(!touchedonSwap)
  }

  const touchedNFT = () => {
    setTouchedExchange(!touchedExchange)
    setTouchedonSwap(!touchedonSwap)
  }

  return (
    <ScreenWrapper >
      <HomeCard
        iconRow={false}
        profileShow={false}
        onPressNotification={OnPressNotification}
        onPressSetting={onPressSetting}
      />
      <View style={styles.textcontainer}>
        <View style={[styles.lefttxt, touchedonSwap && styles.ontouch]}>
          <TouchableOpacity
            onPress={toucheTokens}
          >
            <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold}>Swap</SmallText>
          </TouchableOpacity>
        </View>
        <View style={[styles.lefttxt, touchedExchange && styles.ontouch]}>
          <TouchableOpacity
            onPress={touchedNFT}>
            <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold}>Exchange</SmallText>
          </TouchableOpacity>
        </View>
      </View>
      {
        !touchedExchange &&
        <>
          <View style={{ borderBottomWidth: width(0.2), flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: width(7), marginVertical: width(3) }}>
            <View>
              <SmallText>You pay</SmallText>
              <SmallText fontFamily={FontFamily.poppinsSemiBold} size={5}>0</SmallText>
              <SmallText>Balance: 5 BNB</SmallText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <SVGIcons.bnb />
              <View style={{ marginHorizontal: width(4) }}>
                <SmallText fontFamily={FontFamily.poppinsSemiBold} size={5}>BNB</SmallText>
              </View>
              <View style={{ marginTop: width(2) }}>
                <SVGIcons.SwapArrow /></View>
            </View>
          </View>
          <View style={{ borderBottomWidth: width(0.2), flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: width(7), marginVertical: width(3) }}>
            <View>
              <SmallText>You Get</SmallText>
              <SmallText fontFamily={FontFamily.poppinsSemiBold} size={5}>0</SmallText>
              <SmallText>Balance: 0 BNB</SmallText>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <SVGIcons.palkadot />
              <View style={{ marginHorizontal: width(4) }}>
                <SmallText fontFamily={FontFamily.poppinsSemiBold} size={4.5}>Polkadot</SmallText>
              </View>
              <View style={{ marginTop: width(2) }}>
                <SVGIcons.SwapArrow /></View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: width(3), marginVertical: width(5) }}>
            <View style={{ padding: width(1), backgroundColor: '#D5EBFE', width: width(20), borderRadius: width(3) }}>
              <MediumText size={4.3} textAlign='center'>25%</MediumText>
            </View>
            <View style={{ padding: width(1), backgroundColor: '#D5EBFE', width: width(20), borderRadius: width(3) }}>
              <MediumText size={4.3} textAlign='center'>50%</MediumText>
            </View>
            <View style={{ padding: width(1), backgroundColor: '#D5EBFE', width: width(20), borderRadius: width(3) }}>
              <MediumText size={4.3} textAlign='center'>75%</MediumText>
            </View>
            <View style={{ padding: width(1), backgroundColor: '#D5EBFE', width: width(20), borderRadius: width(3) }}>
              <MediumText size={4.3} textAlign='center'>100%</MediumText>
            </View>
          </View>
          <SmallText textAlign='center'>
            1 BNB = 248.21215487 Polkadot
          </SmallText>
          <Button
            containerStyle={styles.button2}
            textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
          >
            Swap
          </Button>
        </>
      }
      <BottomBar
        OnPressWallet={() => navigation.navigate(ScreenNames.HOMESCREEN)}
        OnPressSwap={() => navigation.navigate(ScreenNames.SWAPSCREEN)}
        OnPressNFTs={() => navigation.navigate(ScreenNames.NFT_Screen)}
        OnPressDiscover={() => navigation.navigate(ScreenNames.DISCOVERSCREEN)}
      />
      <ReactNativeModal
        isVisible={SettingmodalVisible}
        onBackdropPress={() => { setSettingModalVisible(!SettingmodalVisible) }} // Android back press
        animationIn="slideInLeft" // Has others, we want slide in from the left
        animationOut="slideOutLeft" // When discarding the drawer
        useNativeDriver // Faster animation
        hideModalContentWhileAnimating // Better performance, try with/without
        propagateSwipe={true} // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        style={styles.sideMenuStyle} // Needs to contain the width, 75% of screen width in our case
        backdropColor='#8787F1'

      >
        <View style={styles.settingcontainer}>
          <SmallText size={5} color={AppColors.white}>Settings</SmallText>
          <TouchableOpacity onPress={() => setSettingModalVisible(!SettingmodalVisible)}>
            <View style={{ marginTop: width(2.5) }}>
              <SVGIcons.cross2 />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: width(10) }}
        >
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.SETTINGWALLET />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Wallets</SmallText>
              </View>
              <View style={{ flexDirection: "row", right: 0, position: 'absolute' }}>
                <SmallText size={3}>Multi-Coin Wallet</SmallText>
                <View style={{ marginLeft: width(2) }}>
                  <SVGIcons.right />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.darkmode />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Dark Mode</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <Switch
                  trackColor={{ false: "#767577", true: AppColors.primary }}
                  style={{ left: width(1) }}
                  thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setIsEnabled(!isEnabled)}
                  value={isEnabled}
                />
              </View>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.security />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Security</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.pushnoti />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Push Notifications</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.nodesetting />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Node Settings</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.preference />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Preferences</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.procealert />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Price Alerts</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.walletconnect />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Wallet Connect</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <SmallText size={3.5} color={AppColors.primary}>Join Community</SmallText>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.helpcenter />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Help Center</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.twitter />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Twitter</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.telegram />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Telegram</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.facebook />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Facebook</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.youtube />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>Youtube</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.left}>
              <SVGIcons.about />
              <View style={{ marginLeft: width(2) }}>
                <SmallText>About</SmallText>
              </View>
              <View style={{ right: 0, position: 'absolute' }}>
                <SVGIcons.right />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ReactNativeModal>
    </ScreenWrapper>
  );
};

export default Swap;
