import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export const Home = ({ navigation }) => {
  console.log(navigation)
  async function handleLogin() {
    const token = 'adfajdsfkjas'

    await AsyncStorage.setItem('token', token)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', {
          loquesea: 'asdfJ'
        })}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

