import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useAsyncEffect } from '../hooks/asyncEffect/asyncEffect';

export function AsyncComponent() {
  const [data, setData] = useState<string>('');

  const fetchData = async () => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setData('oioioi2');
        resolve();
      }, 10000)
    );
    console.log('Data fetched');
  };

  useAsyncEffect(fetchData, []);

  return (
    <View style={{ top: 160 }}>
      <Text>My Component {data}</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}
