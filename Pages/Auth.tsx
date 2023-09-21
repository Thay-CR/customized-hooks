import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useAuth } from '../hooks/auth/auth';

export const AuthExample: React.FC = () => {
    const { user, isAuthenticated, login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await login(email, password);
        //Chamar somente apos autenticação feita com sucesso em alguma API 
        //OBS:Exemplo utilizado somente pra demonstração de mudança de estado não incluindo validações e segurança
    };

    const handleLogout = async () => {
        await logout();
    };

    return (
        <View>
            {isAuthenticated ? (
                <View style={{ top: 100 }}>
                    <Text>Bem-vindo, {user?.email}!</Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            ) : (
                <View style={{ top: 100 }}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
            )}
        </View>
    );
};
