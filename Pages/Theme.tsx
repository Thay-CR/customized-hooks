// src/components/ColorChanger.tsx

import React, { useEffect } from 'react';
import { View, Button, } from 'react-native';
import { useThemeStore } from '../hooks/theme/theme';
import { globalStyles } from '../commom/globalStyles';

export const ThemeComponent: React.FC = () => {
    const { theme, toggleTheme } = useThemeStore();
    const white = 'white'
    const black = 'black'

    useEffect(() => {
        console.log(`Theme`, theme)
    }, [theme])

    return (
        <View style={[{ padding:100 }, theme === "light" ? globalStyles.lightBackground : globalStyles.darkBackground]}>
            <Button
                title="Mudar Cor" onPress={toggleTheme} />
        </View>
    );
};

