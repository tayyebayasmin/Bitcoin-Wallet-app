import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { Modal, ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { BottomBar, Button, HomeCard } from '~components';
import SVGIcons from '~assets/svg';
import { LargeText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import { FontFamily } from '~assets/fonts';
import { height, width } from '~utills/Dimensions';
import { MyMainnets } from '~utills/DummyData';
import modal, { ReactNativeModal } from "react-native-modal";
import { Text } from 'react-native-svg';

const Home = ({ navigation }: NativeStackScreenProps<any>) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [touchedonToken, setTouchedonToken] = useState(true)
  const [touchedNft, setTouchedNft] = useState(false)
  const [SettingmodalVisible, setSettingModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toucheTokens = () => {

    setTouchedNft(!touchedNft)
    setTouchedonToken(!touchedonToken)
  }

  const touchedNFT = () => {

    setTouchedonToken(!touchedonToken)
    setTouchedNft(!touchedNft)
  }

  const OnPressNotification = () => {
    navigation.navigate(ScreenNames.NOTIFICATION)
  }
  const onPressSetting = () => {
    setSettingModalVisible(!SettingmodalVisible)
  }


  return (
    <ScreenWrapper >
      <View style={styles.container}>
        <HomeCard
          onPressNotification={OnPressNotification}
          onPressSetting={onPressSetting}
          // onPressScan={}
          onPressSend={() => { navigation.navigate(ScreenNames.SENDSCREEN) }}
          onPressRecieve={() => { navigation.navigate(ScreenNames.RECIEVESCREEN) }}
          onPressBuy={() => { navigation.navigate(ScreenNames.BUYSCREEN) }}
        />
      </View>
      <View style={styles.textcontainer}>
        <View style={[styles.lefttxt, touchedonToken && styles.ontouch]}>
          <TouchableOpacity
            onPress={toucheTokens}
          >
            <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold}>Tokens</SmallText>
          </TouchableOpacity>
        </View>
        <View style={[styles.lefttxt, touchedNft && styles.ontouch]}>
          <TouchableOpacity
            onPress={touchedNFT}>
            <SmallText size={5} fontFamily={FontFamily.poppinsSemiBold}>NFT</SmallText>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.congrats}>
          <View style={styles.centeredView}>
            <SVGIcons.congrat />
            <SmallText size={6} fontFamily={FontFamily.poppinsSemiBold}>Congratulations!</SmallText>
            <SmallText size={5}>You have created a wallet.</SmallText>
            <Button
              containerStyle={styles.button1}
              textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
              onPress={() => { setModalVisible(!modalVisible) }}
            >
              OK
            </Button>
          </View>
        </View>
      </Modal>
      {!touchedNft &&
        <>
          <ScrollView>
            {MyMainnets.map((mainnet) => {
              return (
                <TouchableOpacity>
                  <View style={styles.mainContainer}>

                    <SVGIcons.bitcoinMainnet />
                    <View style={styles.textContainer}>
                      <SmallText size={4} fontFamily={FontFamily.poppinsSemiBold}>AVAX_c</SmallText>
                      <SmallText color={AppColors.grey50}>$ 22.698</SmallText>
                    </View>
                    <View style={{ right: 0, position: 'absolute' }}>
                      <SmallText textAlign='left' size={4} fontFamily={FontFamily.poppinsSemiBold}>  0.00</SmallText>
                      <SmallText textAlign='left' color={AppColors.grey50}>$0.00</SmallText>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })

            }
          </ScrollView>
          <Button
            containerStyle={styles.button2}
            textStyle={{ fontFamily: FontFamily.poppinsSemiBold }}
            onPress={() => { navigation.navigate(ScreenNames.ADD_TOKENS) }}
          >
            Add New Tokens
          </Button>
        </>
      }


      {/* NFT */}
      {touchedNft &&
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: width(20) }}>
          <SmallText>Collectibles will appear here</SmallText>
          <TouchableOpacity>
            <SmallText color={AppColors.primary} size={4.3}>Recieve</SmallText>
          </TouchableOpacity>
          <TouchableOpacity>
            <SmallText color={AppColors.primary} size={4.3}>Open on OPenSea.io</SmallText>
          </TouchableOpacity>
        </View>
      }

      <BottomBar />
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

export default Home;
