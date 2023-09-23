import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { usePagination } from '../hooks/pagination/pagination';

const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

export  function PaginatedList() {
  const pagination = usePagination<string>(data);

  useEffect(() => {
    // Load data or perform other actions when the page changes
    // In a real-world scenario, you might fetch data from an API.
  }, [pagination.currentPage]);

  return (
    <View style={{top:160}}>
      <FlatList
        data={pagination.pageItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Previous" onPress={pagination.prevPage} disabled={pagination.currentPage === 1} />
        <Text>{`Page ${pagination.currentPage} of ${pagination.totalPages}`}</Text>
        <Button title="Next" onPress={pagination.nextPage} disabled={pagination.currentPage === pagination.totalPages} />
      </View>
    </View>
  );
}
