import React from 'react';
import Header from './Header';
import Userinfo from './UserInfo';
import { useUser } from '../UserContext';

function Login() {
    const { profile, login } = useUser();

    return (
        <div>
            <Header />
            {profile ? (
                <Userinfo />
            ) : (
                <div className="items-center">
                <button className="text-xl text-purple-600 font-bold" onClick={login}>
                    Sign in with Google 🚀
                </button>
                </div>
            )}
        </div>
    );
}

export default Login;
