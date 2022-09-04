import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '~utills/AppColors';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import SVGIcons from '~assets/svg';
import { height, width } from '~utills/Dimensions';
import { MediumText, SmallText } from '~components/text';
import { FontFamily } from '~assets/fonts';


const NotificationScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={{ width: width(100), backgroundColor: AppColors.primary, padding: width(5), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    >
                        <SVGIcons.leftArrow />

                    </TouchableOpacity>
                    <View style={{ alignSelf:'center', width:width(80),alignItems:'center'}}>
                        <SmallText size={4.5} fontFamily={FontFamily.poppinsSemiBold} color={AppColors.white} >Notification</SmallText>
                    </View>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginVertical:width(30),}}>
                    <SVGIcons.nitificationman/>
                    <SmallText size={4.2}>Notification will appear here</SmallText>
                    <TouchableOpacity>
                    <MediumText size={5} fontFamily={FontFamily.poppinsSemiBold}>Refresh</MediumText>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default NotificationScreen;
