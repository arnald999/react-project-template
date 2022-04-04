import React from 'react';

const AuthContext = React.createContext({});

export const AuthProvider: React.FC = ({ children }) => {
    const [auth, setAuth] = React.useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}    
        </AuthContext.Provider>
    )
}

export default AuthContext;