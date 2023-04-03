import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export default function AppWrapper({ children }) {
    const [currentUser, setCurrentUser] = useState('sloggato');
  

    return (
        <AppContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
  return useContext(AppContext);
}