import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import axios from 'axios'

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar style="auto" />
    </View>
  )
}

function Posts({ navigation }) {
  const [ posts, setPosts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
    })
      .then(({ data }) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading />
  return (
    <View style={styles.container}>
      {posts && posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Button
                title="View details"
                onPress={() => navigation.navigate('Post', { id: item.id })}
              />
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

function Post({ route }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${route.params.id}`
    })
      .then(({ data }) => {
        setPost(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading />
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
