import React, { createContext, useContext, useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
    };

    useEffect(() => {
        if (user && user.access_token) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ profile, login, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
