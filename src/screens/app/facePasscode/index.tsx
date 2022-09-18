import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useCameraDevices, Camera, useFrameProcessor } from 'react-native-vision-camera';
import { ScreenNames } from '~routes';


const FacePasscode = ({ navigation }: NativeStackScreenProps<any>) => {
    const devices = useCameraDevices()
    const device = devices.front
    const moveOn=()=>{
        setTimeout(() => {
            navigation.replace(ScreenNames.LOADING)
        }, 3000)
        console.log('hello')
    }
    if (device == null) return <View />

    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
         {moveOn}
        </>
    )
}
export default FacePasscode