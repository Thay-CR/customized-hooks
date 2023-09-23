// src/hooks/useGeolocation.ts

import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGeolocation = () => {
  const [location, setLocation] = useState<Location.LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setError('Permissão de localização não concedida');
          return;
        }

        const locationResult = await Location.getCurrentPositionAsync({});
        setLocation(locationResult);
      } catch (err) {
        setError('Erro ao obter a localização: ' + err.message);
      }
    };

    getLocation();
  }, []);

  return { location, error };
};
