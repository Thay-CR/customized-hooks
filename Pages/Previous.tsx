import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { usePrevious } from '../hooks/previousValue/previous';

export function PreviousComponent() {
  const [inputValue, setInputValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const previousInputValue = usePrevious(inputValue);

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleSaveButtonClick = () => {
    setPreviousValue(currentValue);
    setCurrentValue(inputValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Valor atual: {currentValue}</Text>
      <Text>Valor anterior: {previousValue !== '' ? previousValue : 'N/A'}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginTop: 10 }}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Digite algo"
      />
      <Button title="Salvar" onPress={handleSaveButtonClick} />
    </View>
  );
}
