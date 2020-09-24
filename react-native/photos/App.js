import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as Permission from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  const [cameraPermission, setCameraPermission] = useState('denied')
  const [image, setImage] = useState(null)

  useEffect(() => {
    Permission.askAsync(Permission.CAMERA_ROLL)
      .then(({ status }) => setCameraRollPermission(status))
    Permission.askAsync(Permission.CAMERA)
      .then(({ status }) => setCameraPermission(status))
  }, [])

  async function pickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    })
    console.log(data)
    setImage(data)
  }

  async function takePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    })

    setImage(data)
  }

  if (cameraRollPermission === 'denied' || cameraPermission === 'denied') {
    return (
      <View style={styles.container}>
        <Text>You don't have permissions!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Hola a todos desde MiR</Text>
      <Button
        title="Open Camera Roll"
        onPress={pickImage}
      />
      <Button
        title="Take a Picture"
        onPress={takePicture}
      />
      {image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 300
  }
});
