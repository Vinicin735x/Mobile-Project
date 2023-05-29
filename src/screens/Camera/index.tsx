import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import { styles } from "./styles"
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from 'expo-image-picker'
import * as FaceDetector from 'expo-face-detector'
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

interface IPhoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()
  const handleBarCodeScanned = ({type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert(data);
  };
  const handleFacesDetected = ({faces}: FaceDetectionResult): void => {
    if (faces.length > 0) {
      const FaceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(FaceDetect)
    } else {
      setFace(undefined)
    }
  }

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Cê confia em um estudante do terceiro ano pra abrir sua câmera?</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }
  if (!permissionMedia) {
    return <View />;
  }

  if (!permissionMedia.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Deixa eu ver sua galeria ae namoral?</Text>
        <Button onPress={requestPermissionMedia} title="grant permission" />
      </View>
    );
  }


  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
      setTakePhoto(true)
    }
  }

  async function savePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }

  return (
    <View style={styles.container}>
      {!takePhoto ? (
        <>
          <ComponentButtonInterface title='Flip' type='third' onPressI={toggleCameraType} />
          <Camera style={styles.camera} type={type} ref={ref} 
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode:FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 1000,
              tracking: true,
            }}
            />
          <ComponentButtonInterface title='Tirar foto' type='third' onPressI={takePicture} />
        </>
      ) : (
        <>
          <ComponentButtonInterface title='Salvar foto' type='third' onPressI={savePhoto} />
          <ComponentButtonInterface title='Abrir imagem' type='third' onPressI={pickImage} />
          <ComponentButtonInterface title='Voltar' type='third' onPressI={setTakePhoto(false)} />
          {photo && photo.uri && (
            <Image source={{ uri: photo.uri }} style={styles.img} />
          )}
        </>
      )}



    </View>
  );
}


