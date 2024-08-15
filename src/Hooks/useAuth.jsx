import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const data = useContext(authContext)
    return data;
};

export default useAuth;