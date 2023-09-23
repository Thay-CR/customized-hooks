import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNotification } from '../hooks/notification/notification'; 

export  function NotificationExample() {
  const { schedulePushNotification } = useNotification(); 

  const handleNotificationPress = async () => {
    const notificationContent = {
      title: "Você recebeu uma notificação! 📬", //A mensagempodem ter um delay maior do que o esperado***
      body: 'Esta é a mensagem da notificação',
      data: { someData: 'goes here' },
    };

    await schedulePushNotification(notificationContent, { seconds: 5 });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pressione o botão para agendar uma notificação</Text>
      <Button title="Agendar Notificação" onPress={handleNotificationPress} />
    </View>
  );
}
