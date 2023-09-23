import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

interface NotificationContent {
  title: string;
  body: string;
  data?: object;
}

export function useNotification() {
  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      let token: string | undefined;

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          try {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          } catch (error) {
            console.log("🚀 ~ file: notification.ts:37 ~ registerForPushNotificationsAsync ~ error:", error)
          }
     
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }

        // Substitua 'your-project-id' pelo seu ID de projeto Expo.
        const expoPushToken = await Notifications.getExpoPushTokenAsync({  projectId: "da9bd084-58c8-4de9-8971-edb357cebdd0"});
        token = expoPushToken.data;
      } else {
        alert('Must use a physical device for Push Notifications');
      }

      return token;
    };

    registerForPushNotificationsAsync().then((token) => {
      console.log("🚀 ~token:", token)
      // Faça o que quiser com o token, como armazená-lo no estado do seu componente.
    });

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log("🚀 ~ file:  notification:", notification)
      // Faça o que quiser com a notificação recebida.
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("🚀 ~ file: response:", response)
      // Faça o que quiser com a resposta à notificação.
    });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  // Função para agendar uma notificação.
  const schedulePushNotification = async (notificationContent: NotificationContent, trigger: null | { seconds: number }) => {
    console.log(notificationContent, trigger);
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger,
    });
  };

  return {
    schedulePushNotification,
  };
}
