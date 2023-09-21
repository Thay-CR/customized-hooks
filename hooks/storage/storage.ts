import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

type UseAsyncStorageResult<T> = {
  data: T | null;
  setData: (value: T) => void;
  removeData: () => void;
};

export const useAsyncStorage = <T>(key: string, initialValue: T | null = null): UseAsyncStorageResult<T> => {
  const [data, setData] = useState<T | null>(initialValue);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem(key);
        if (storedData !== null) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, [key]);

  const saveData = async (value: T) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setData(value);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setData(null);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  return { data, setData: saveData, removeData };
};

