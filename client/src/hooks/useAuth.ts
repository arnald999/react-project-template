import React, { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

interface AuthContextType {
    auth: any;
    setAuth: any;
}

const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
}

export default useAuth;