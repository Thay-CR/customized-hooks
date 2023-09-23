import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

type ScreenSize = 'small' | 'medium' | 'large';

interface MediaQuery {
  screenSize: ScreenSize;
}

export function useMediaQuery(): MediaQuery {
  const windowDimensions = useWindowDimensions();

  const getScreenSize = (height: number): ScreenSize => {
    if (height < 375) {
      return 'small';
    } else if (height < 600) {
      return 'medium';
    } else {
      return 'large';
    }
  };

  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    screenSize: getScreenSize(windowDimensions.height), // Obtém o tamanho da tela inicial
  });

  useEffect(() => {
    // Atualiza o tamanho da tela quando as dimensões mudam
    setMediaQuery({
      screenSize: getScreenSize(windowDimensions.height),
    });
  }, [windowDimensions.height]);

  return mediaQuery;
}
