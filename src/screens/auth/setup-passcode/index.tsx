import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View, Switch, Image, Modal } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import SVGIcons from '~assets/svg';
import { Button, TextField } from '~components';
import { LargeText, MediumText, SmallText } from '~components/text';
import { ScreenNames } from '~routes';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '~store';
import { setIsLoggedIn } from '~store/slices/user';
import { FontFamily } from '~assets/fonts';
import UnCheckboxSVG from '~assets/svg/UnCheckboxSvg';
import CheckboxSVG from '~assets/svg/CheckboxSvg';

const schema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required!')
    .min(8)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "One Uppercase, One Lowercase, One Number and one Special Character"),
  confirmPassword: Yup.string()
    .required('Confirm Password is required!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SetupPasscode = ({ navigation }: NativeStackScreenProps<any>) => {

  const [checked, setChecked] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pressFinger, serPressFinger] = useState(false);
  const [pressFace, serPressFace] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onpress = () => {

    serPressFinger(!pressFinger)
    setTimeout(() => {
      navigation.replace(ScreenNames.LOADING)
      setModalVisible(!modalVisible)
    }, 1000);



  }
  const onpressFace = () => {

    serPressFace(!pressFace)
    setTimeout(() => {
      navigation.replace(ScreenNames.SCANPASSCODE)
      setModalVisible(!modalVisible)
    }, 1000);
    setTimeout(() => {
      navigation.replace(ScreenNames.LOADING)
    }, 5000);


  }
  return (
    <ScreenWrapper
      scrollType="scroll"
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
      }}>

      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => { navigation.goBack() }}>
            <SVGIcons.backArrow />
          </TouchableOpacity>
          <View style={styles.icon}>
            <SVGIcons.smallBitcoin />
          </View>
        </View>
        <View style={{ marginVertical: width(7), alignContent: 'center', alignSelf: 'center' }}>
          <SVGIcons.progress />
        </View>
      </View>
      <View style={styles.container3}>
        <MediumText color={AppColors.black} textAlign='center' fontFamily={FontFamily.poppinsSemiBold} >Create Password</MediumText>
        <SmallText color={AppColors.black} textAlign='center' textStyles={styles.text} >This Password will unlock you COINSAFE
          wallet only on this device.</SmallText>

        <TextField
          name='password'
          control={control}
          containerStyle={styles.textfield1}
          placeholder='New Passcode'
          showPasswordIcon={true}
          showPassword
        />
        <TextField
          name='confirmPassword'
          control={control}
          placeholder='Confirm Passcode'
          secureTextEntry={showConfirmPassword}
          showPasswordIcon={true}
          onPressIcon={() => setShowConfirmPassword(!showConfirmPassword)}
        />
        <SmallText size={3}>Must be at least 8 characters</SmallText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SmallText>Unlock with Biometrics?</SmallText>
          <Switch
            trackColor={{ false: "#767577", true: AppColors.primary }}
            style={{ left: width(1) }}
            thumbColor={isEnabled ? "#3C95FF" : AppColors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
        <View style={styles.checkboxRow}>
          <Pressable style={{ paddingRight: width(1.5) }} onPress={() => setChecked(!checked)}>
            {checked ? (<CheckboxSVG width={18} height={18} />) : (<UnCheckboxSVG width={18} height={18} />)}
          </Pressable>
          <SmallText size={3} color={AppColors.grey20}>I understand that COINSAFE cannot recover
            this password for me.<Text style={styles.checkboxtext}> Read more.</Text></SmallText>
        </View>

      </View>
      <Button
        onPress={() => setModalVisible(!modalVisible)}
        // disabled={!isValid}
        containerStyle={styles.button}>
        Create Password
      </Button>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        // onRequestClose={() => {
        //     setModalVisible(!modalVisible);
        // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <SmallText>Authentication required</SmallText>
              <View style={styles.iconrow}>
                <View style={{ marginHorizontal: width(3), backgroundColor: AppColors.primary, padding: width(3), borderRadius: width(10), justifyContent: 'center' }}>
                  <SVGIcons.fingerprint />
                </View>
                { !pressFace?
                <View style={{ backgroundColor: AppColors.white, padding: width(2), borderRadius: width(10), justifyContent: 'center', borderColor: AppColors.black, borderWidth: width(0.2) }}>
                  <Pressable
    
                    onPress={onpressFace}>
                    <SVGIcons.face />
                  </Pressable>

                </View>
                :
                <View style={{ backgroundColor: AppColors.white, padding: width(2), borderRadius: width(10), justifyContent: 'center', borderColor: AppColors.primary, borderWidth: width(0.2) }}>
                    <SVGIcons.blueface />
                </View>
                }
              </View>
              <SmallText>Please use fingerprint to login</SmallText>
              <SmallText color={AppColors.primary}>PIN</SmallText>
              <Pressable
                onPress={onpress}
              >
                {pressFinger ? <SVGIcons.bluefinger /> : <SVGIcons.fingerprint2 />}
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
};

export default SetupPasscode;
