import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function Form() {
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [terms, setTerms] = useState(false)
  const [language, setLanguage] = useState("java")

  function handleSubmit() {
    const data = {
      name,
      lastname,
      terms,
      language,
    }

    console.log(data)
  }

  return (
    <React.Fragment>
      <TextInput
        placeholder="Insert your name"
        onChangeText={text => {
          console.log(text)
          setName(text)
        }}
        value={name}
      />
      <TextInput
        placeholder="Insert your last name"
        onChangeText={text => setLastname(text)}
        value={lastname}
        secureTextEntry
      />
      <Switch
        onValueChange={() => setTerms(prevTerms => !prevTerms)}
        value={terms}
      />
      <Picker
        selectedValue={language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue) =>
          setLanguage(itemValue)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button
        title="Send"
        onPress={handleSubmit}
      />
    </React.Fragment>
  );
}
