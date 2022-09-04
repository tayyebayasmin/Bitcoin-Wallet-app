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
} from '~screens/app';
import NotificationScreen from '~screens/app/Notification';
import SendScreen from '~screens/app/send';
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
          
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
