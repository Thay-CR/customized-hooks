import React,{useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useClipboard } from '../hooks/clipBoard/clipBoard'; 

export  function ClipboardExample() {
  const { copiedText, copyToClipboard, clearClipboard } = useClipboard();
  const [textToCopy, setTextToCopy] = useState<string>('');

  const handleCopy = () => {
    copyToClipboard(textToCopy);
  };

  const handleClear = () => {
    clearClipboard();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Copied Text: {copiedText || 'Nenhum texto copiado'}</Text>
      <TextInput
        placeholder="Texto para copiar"
        onChangeText={(text) => setTextToCopy(text)}
        value={textToCopy}
        style={{ borderWidth: 1, padding: 8, marginTop: 10 }}
      />
      <Button title="Copiar para Área de Transferência" onPress={handleCopy} />
      <Button title="Limpar Área de Transferência" onPress={handleClear} />
    </View>
  );
}
