'use client';

import { useCallback, useSyncExternalStore } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((currentValue: T) => T)) => void] {
  const subscribe = useCallback(
    (callback: () => void) => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === key) {
          callback();
        }
      };

      const handleCustomStorageChange = () => {
        callback();
      };

      window.addEventListener('storage', handleStorageChange);
      window.addEventListener(
        'local-storage-change',
        handleCustomStorageChange
      );

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener(
          'local-storage-change',
          handleCustomStorageChange
        );
      };
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return initialValue;
    }

    try {
      return JSON.parse(storedValue) as T;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const getServerSnapshot = useCallback(() => {
    return initialValue;
  }, [initialValue]);

  const value = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setValue = useCallback(
    (value: T | ((currentValue: T) => T)) => {
      const currentValue = getSnapshot();

      const newValue =
        typeof value === 'function'
          ? (value as (currentValue: T) => T)(currentValue)
          : value;

      localStorage.setItem(key, JSON.stringify(newValue));

      window.dispatchEvent(new Event('local-storage-change'));
    },
    [key, getSnapshot]
  );

  return [value, setValue];
}