import React from 'react';
import { View, Text } from 'react-native';
import { useMediaQuery } from '../hooks/mediaQuery/mediaQuery';

export function MediaQueryComponent() {
    const { screenSize } = useMediaQuery();

    return (
        <View style={{ top: 200 }}>
            <Text>Screen Size: {screenSize}</Text>
        </View>
    );
}

