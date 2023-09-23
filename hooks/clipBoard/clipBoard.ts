import { useEffect, useState } from 'react';
import * as Clipboard from 'expo-clipboard';

export function useClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const checkClipboard = async () => {
      const content = await Clipboard.getStringAsync();
      setCopiedText(content);
    };

    const interval = setInterval(checkClipboard, 1000); // Verifique a área de transferência a cada segundo (ou ajuste o intervalo conforme necessário).

    return () => {
      clearInterval(interval); // Limpe o intervalo quando o componente for desmontado.
    };
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await Clipboard.setString(text);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const clearClipboard = async () => {
    try {
      await Clipboard.setString('');
    } catch (error) {
      console.error('Failed to clear clipboard:', error);
    }
  };

  return { copiedText, copyToClipboard, clearClipboard };
}
