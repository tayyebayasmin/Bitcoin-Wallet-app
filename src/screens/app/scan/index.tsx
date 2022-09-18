import React, { useState, useEffect } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { useCameraDevices, Camera, useFrameProcessor } from 'react-native-vision-camera';
// import { BarcodeFormat, scanBarcodes } from 'vision-camera-code-scanner';


const Scan = () => {
    const devices = useCameraDevices()
    const device = devices.back
    if (device == null) return <View/>
  
    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
        </>
    )
}
export default Scan