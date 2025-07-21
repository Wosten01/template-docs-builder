import React, { createContext, useContext } from 'react';


export function createHookProvider<T>(hook: () => T, contextName = 'GenericHook') {
  const Context = createContext<T | undefined>(undefined);

  const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const hookData = hook();
    return <Context.Provider value={hookData}>{children}</Context.Provider>;
  };

  const useHookContext = (): T => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(`useHookContext must be used within a ${contextName}Provider`);
    }
    return context;
  };

  return { Provider, useHookContext };
}