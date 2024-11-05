import React from 'react';
import { useUser } from '../UserContext';

const Header = () => {
    const { profile, logOut } = useUser();

    return (
        <div className="bg-white shadow-lg rounded-lg p-3">
            <img className="p-1 w-36 h-28" src="/finallogo.jpg" alt="logo" />
            {profile &&
                <div>
                    <p>HELLO, {profile.name} 👋</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            }
        </div>
    );
};

export default Header;
