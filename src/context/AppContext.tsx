import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';


const AppContext = React.createContext({});

function AppProvider({children} : PropsWithChildren<{}>){
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
      loggedIn, setLoggedIn
    }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
