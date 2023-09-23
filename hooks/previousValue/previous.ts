import { useRef, useEffect } from 'react';

/**
 * Hook para obter o valor anterior de uma variável ou estado.
 * @param value O valor a ser rastreado.
 * @returns O valor anterior.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

