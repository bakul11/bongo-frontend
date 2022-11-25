import React from 'react';
import { Navigate } from 'react-router-dom';
import useActiveUser from '../../Hooks/useActiveUser';

const Protected = ({ children }) => {
    const [user] = useActiveUser();

    if (!user?.email) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default Protected;