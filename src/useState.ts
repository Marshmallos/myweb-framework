let state: unknown;

export function useState<T>(initialState: T) {
  if (typeof state === 'undefined') state = initialState;
  const setState = function (newState: T): void {
    state = newState;
  };

  return [state as T, setState] as const;
}
