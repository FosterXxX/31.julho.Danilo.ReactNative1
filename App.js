
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [inputValues, setInputValues] = useState({
    input1: '',
  });

  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value) => {
    setInputValues({...inputValues, [inputName]: value});
  };
  const handleSum = () => {
    const { input1 } = inputValues;
    const result = parseInt(input1);
    setSum(result)
  };




return (
  <View style={styles.container}>
    <Text style={styles.label}>Input 1:</Text>
    <TextInput
    style={styles.input}
    onChangeText={(value) => handleInputChange('input1, value')}
    value={inputValues.input1}
    keyboartType="numeric"
    />

  <Button tittle="somar" onPress={handleSum}/>
  <Text style={styles.result}>Resultado: {sum}</Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 20,
  },
});
