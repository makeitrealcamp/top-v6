import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

const sectionListMock = [
  {
    title: "M",
    data: [
      { id: 1, name: "Maria", age: 24 },
      { id: 4, name: "Martin", age: 24 },
    ]
  },
  {
    title: "J",
    data: [
      { id: 2, name: "Juan", age: 28 },
    ]
  },
  {
    title: "A",
    data: [
      { id: 3, name: "Ana", age: 34 },
    ]
  }
]

function SList() {
  return (
    <View>
      <SectionList
        sections={sectionListMock}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  )
}

const flatListMock = [
  { id: 1, name: "Maria", age: 24 },
  { id: 2, name: "Juan", age: 28 },
  { id: 3, name: "Ana", age: 34 },
  { id: 4, name: "Simon", age: 24 },
]

function List() {
  return (
    <View>
      <FlatList
        data={flatListMock}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <List />
      <SList />
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
