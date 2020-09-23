import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  const [onFocus, setOnFocus] = React.useState(false)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: props.dark ? '#333' : '#fff',
    },
    title: {
      color: props.dark ? '#fff' : '#333',
      width: 30,
    },
    box1: {
      height: 100,
      flex: 1,
      backgroundColor: 'yellow'
    },
    box2: {
      height: 100,
      flex: 2,
      backgroundColor: 'red'
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <StatusBar style="auto" />
    </View>
  );
}


export const styles2 = StyleSheet.create({})
