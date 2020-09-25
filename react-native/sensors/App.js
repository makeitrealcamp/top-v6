import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { Gyroscope } from 'expo-sensors'

export default function App() {
  const [gyroscope, setGyroscope] = useState(null)
  const [locationPermission, setLocationPermission] = useState('denied')
  const [location, setLocation] = useState(null)

  useEffect(() => {
    Gyroscope.isAvailableAsync()
      .then(isAvailable => {
        console.log(isAvailable)
        if(isAvailable) {
          Gyroscope.addListener(data => setGyroscope(data))
          Gyroscope.setUpdateInterval(1000);
        }
      })
  }, [])

  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => setLocationPermission(status))
  }, [])

  async function handleLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low
    })

    setLocation(data)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Get location"
        onPress={handleLocation}
      />
      {location && (
        <View>
          <Text>Lon: {location.coords.longitude}</Text>
          <Text>Lat: {location.coords.latitude}</Text>
        </View>
      )}
      {gyroscope && (
        <View>
          <Text>{gyroscope.x}</Text>
          <Text>{gyroscope.y}</Text>
          <Text>{gyroscope.z}</Text>
        </View>
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
});
