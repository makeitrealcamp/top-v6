import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Hola mundoOpen up App.js to start working on your app!</Text>
        <Text>My first react native app</Text>
        <Image style={{ height: 50, width: 50 }} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }} />
      </ScrollView>
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
