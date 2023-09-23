import { useEffect, useRef } from 'react';

type AsyncEffectCallback = () => Promise<void>;

export function useAsyncEffect(
  asyncEffect: AsyncEffectCallback,
  dependencies: any[] = [],
): void {
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    let canceled = false;
    const handleAsyncEffect = async () => {
      if (canceled) return;
      try {
        await asyncEffect();
        if (!canceled) {
          // Execute ações após o efeito assíncrono aqui, se necessário.
        }
      } catch (error) {
        if (!canceled) {
          // Lidar com erros aqui, se necessário.
        }
      }
    };
    handleAsyncEffect();
    return () => {
      canceled = true;
    };
  }, dependencies);
}


