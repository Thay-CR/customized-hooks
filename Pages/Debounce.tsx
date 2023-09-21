import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useDebounce } from '../hooks/debounce/debounce';

export const Debounced: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebounce<string>(inputValue, 500);

  const handleChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={{top:100}}>
      <TextInput
        placeholder="Digite algo..."
        value={inputValue}
        onChangeText={handleChange}
      />
      <Text>Valor debounced: {debouncedInputValue}</Text>
    </View>
  );
};

