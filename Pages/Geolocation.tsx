import React from 'react';
import { View, Text } from 'react-native';
import { useGeolocation } from '../hooks/geolocation/geolocation';

export const GeolocationComponent: React.FC = () => {
    const { location, error } = useGeolocation();

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!location) {
        return <Text>Obtendo localização...</Text>;
    }

    return (
        <View style={{ top: 200 }}>
            <Text>Sua latitude: {location.coords.latitude}</Text>
            <Text>Sua longitude: {location.coords.longitude}</Text>
        </View>
    );
};


