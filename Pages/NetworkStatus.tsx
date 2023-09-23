// Exemplo de uso em um componente

import React from 'react';
import { View, Text } from 'react-native';
import { useNetworkStatus } from '../hooks/networkStatus/networkStaus';

export const NetworkStatusComponent: React.FC = () => {
  const isConnected = useNetworkStatus();

  return (
    <View style={{top:200}}>
      {isConnected === null && <Text>Verificando conexão...</Text>}
      {isConnected === true && <Text>Você está conectado à internet.</Text>}
      {isConnected === false && <Text>Você não está conectado à internet.</Text>}
    </View>
  );
};


