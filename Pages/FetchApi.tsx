import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFetch } from '../hooks/fetchApi/fetchApi';

const options = {}

export function FetchApi() {
  const { data, error, isLoading } = useFetch<string>("https://mysite.com", options);

  if (isLoading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Erro: {error.message}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>Nenhum dado disponível.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Dados da API:</Text>
      <FlatList
        data={data} // Sua lista de objetos
        keyExtractor={(item) => item.id.toString()} // Uma função para extrair chaves únicas
        renderItem={({ item }) => (
          <Text>{item?.name}</Text> // Renderiza o nome de cada objeto
        )}
      />
    </View>
  );
}


