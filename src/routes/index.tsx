import {
  createNavigationContainerRef,
  NavigationContainer,
  DefaultTheme 
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import { 

  StartedScreen,
  WelcomeScreen,
  InstructionScreen,
  SplashScreen,
  Loading,
  ImportScreen1,
  ImportScreen2,
  ImportScreen3,
  AddMainnet,
  Home,
  AddTokens,
  RecieveScreen,
  BuyScreen,
  RecieveCoin,
  BuyCoin,
  PaymentScreen,
  Swap,
  NftScreen,
  DiscoverScreen,
  MultiCoinWallet,
  WalletDetail,
  BackupWallet,
  EmptyWallet,
  WalletConnect,
  PriceAlerts,
  SelectAsset,
  Currency,
  Preferences,
  NodeSettings,
  Security,
  PushNotification,
  Scan,
} from '~screens/app';
import NotificationScreen from '~screens/app/Notification';
import SendScreen from '~screens/app/send';
import WalletSetup from '~screens/app/WalletSetup';
import {selectIsLoggedIn} from '~store/slices/user';
import {BackupMnemonics, MnemonicsFeilds, MnemonicsScreen, SetupPasscode} from '../screens/auth';
import ScreenNames from './routes';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#FFFFFF'
  },
};
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={ScreenNames.SPLASHSCREEN} component={SplashScreen} /> 
          <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} /> 
          <Stack.Screen name={ScreenNames.STARTED} component={StartedScreen} />
          <Stack.Screen name={ScreenNames.INSTRUCTION} component={InstructionScreen} />
          <Stack.Screen name={ScreenNames.SETUP_PASSCODE} component={SetupPasscode} /> 
          <Stack.Screen name={ScreenNames.LOADING} component={Loading} />
          <Stack.Screen name={ScreenNames.MNEMONICS} component={MnemonicsScreen} /> 
          <Stack.Screen name={ScreenNames.BACKUP_MNEMONICS} component={BackupMnemonics} /> 
          <Stack.Screen name={ScreenNames.MNEMONICS_FIELDS} component={MnemonicsFeilds} /> 
          <Stack.Screen name={ScreenNames.IMPORTSCREEN1} component={ImportScreen1} /> 
          <Stack.Screen name={ScreenNames.IMPORTSCREEN2} component={ImportScreen2} /> 
          <Stack.Screen name={ScreenNames.IMPORTSCREEN3} component={ImportScreen3} /> 
          <Stack.Screen name={ScreenNames.ADD_MAINNET} component={AddMainnet} /> 
          <Stack.Screen name={ScreenNames.HOMESCREEN} component={Home} /> 
          <Stack.Screen name={ScreenNames.ADD_TOKENS} component={AddTokens} /> 
          <Stack.Screen name={ScreenNames.NOTIFICATION} component={NotificationScreen} /> 
          <Stack.Screen name={ScreenNames.SENDSCREEN} component={SendScreen} /> 
          <Stack.Screen name={ScreenNames.RECIEVESCREEN} component={RecieveScreen} /> 
          <Stack.Screen name={ScreenNames.BUYSCREEN} component={BuyScreen} /> 
          <Stack.Screen name={ScreenNames.RECIEVECOINS} component={RecieveCoin} /> 
          <Stack.Screen name={ScreenNames.BUYCOIN} component={BuyCoin} /> 
          <Stack.Screen name={ScreenNames.PAYMENT} component={PaymentScreen} /> 
          <Stack.Screen name={ScreenNames.SWAPSCREEN} component={Swap} /> 
          <Stack.Screen name={ScreenNames.NFT_Screen} component={NftScreen} /> 
          <Stack.Screen name={ScreenNames.DISCOVERSCREEN} component={DiscoverScreen} /> 
          <Stack.Screen name={ScreenNames.MULTICOINWALLET} component={MultiCoinWallet} /> 
          <Stack.Screen name={ScreenNames.WALLETSETUP} component={WalletSetup} /> 
          <Stack.Screen name={ScreenNames.WALLETDETAIL} component={WalletDetail} /> 
          <Stack.Screen name={ScreenNames.BACKUPWALLET} component={BackupWallet} /> 
          <Stack.Screen name={ScreenNames.EMPTYWALLET} component={EmptyWallet} /> 
          <Stack.Screen name={ScreenNames.WALLETCONNECT} component={WalletConnect} /> 
          <Stack.Screen name={ScreenNames.PRICEALERTS} component={PriceAlerts} /> 
          <Stack.Screen name={ScreenNames.SELECTASSET} component={SelectAsset} /> 
          <Stack.Screen name={ScreenNames.PREFERENCES} component={Preferences} /> 
          <Stack.Screen name={ScreenNames.CURRENCY} component={Currency} /> 
          <Stack.Screen name={ScreenNames.NODESETTINGS} component={NodeSettings} /> 
          <Stack.Screen name={ScreenNames.SECURITY} component={Security} /> 
          <Stack.Screen name={ScreenNames.PUSHNOTIFICATION} component={PushNotification} /> 
          <Stack.Screen name={ScreenNames.SCANSCREEN} component={Scan} /> 
          
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
