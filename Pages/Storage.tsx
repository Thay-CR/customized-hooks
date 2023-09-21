import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAsyncStorage } from '../hooks/storage/storage';

export const AsyncStorageExample: React.FC = () => {
    const { data, setData, removeData } = useAsyncStorage<string>('myData', 'Initial Value');

    return (
        <View style={{top:100}}>
            <Text>Valor no AsyncStorage: {data}</Text>
            <Button title="Salvar Valor" onPress={() => setData('Novo Valor')} />
            <Button title="Remover Valor" onPress={removeData} />
        </View>
    );
};


