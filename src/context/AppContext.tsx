import React, { useState, createContext, useContext } from 'react';
import type { PropsWithChildren, Dispatch, SetStateAction } from 'react';

interface AppContextInterface {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextInterface => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
export type { AppContextInterface };
