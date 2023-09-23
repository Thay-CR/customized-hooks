// src/components/ColorChanger.tsx

import React, { useEffect } from 'react';
import { View, Button, } from 'react-native';
import { useThemeStore } from '../hooks/theme/theme';

export const ThemeComponent: React.FC = () => {
    const { theme, toggleTheme } = useThemeStore();
    const white = 'white'
    const black = 'black'

    useEffect(() => {
        console.log(`Theme`, theme)
    }, [theme])

    return (
        <View style={{ top: 100, backgroundColor: theme === "light" ? white : black, padding:100 }}>
            <Button
                title="Mudar Cor" onPress={toggleTheme} />
        </View>
    );
};

