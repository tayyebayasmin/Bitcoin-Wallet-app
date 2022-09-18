import React, {useState} from 'react';
import {
    View,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { SmallText } from '~components/text';
import AppColors from '~utills/AppColors';
import styles from './styles';
import SVGIcons from '~assets/svg';
import { FontFamily } from '~assets/fonts';
import { width } from '~utills/Dimensions';
interface Props {
    icon?: JSX.Element;
    onPresscard?: () => void;
    containerStyle?: ViewStyle;
    name: string;
    select?:Boolean
}

const MainnetCard = ({
    onPresscard,
    name = 'Bitcoin',
    select,
    icon = <SVGIcons.bitcoinMainnet />
}: Props) => {
    const [touched,setTouched]=useState(select)
    const onPress=()=>{
        onPresscard
        setTouched(!touched)

    }
    return (

        <TouchableOpacity
            style={[styles.container, touched && styles.containerStyle]}
            onPress={onPress}>
            <View >
                {icon}
            </View>
            <SmallText textStyles={styles.text} size={3.3} color={AppColors.black10} fontFamily={FontFamily.poppinsLight}>
                {name}
            </SmallText>
            { 
            touched&&
            <View style={{position:'absolute',alignSelf:'flex-end',top:-10,paddingTop:width(0)}}>
            <SVGIcons.select/>
            </View>
            }
        </TouchableOpacity>
   
    );
};

export default MainnetCard;
