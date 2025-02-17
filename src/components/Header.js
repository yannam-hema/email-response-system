import React from 'react';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { profile, logOut } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut(); 
        navigate('/'); 
    };
    return (
        <div className="bg-white shadow-lg rounded-lg p-3 flex items-center relative">
            <img className="p-1 w-36 h-28" src="/finallogo.jpg" alt="logo" />
            {profile && (
                <div className="ml-4">
                    <p className="text-lg pl-96">HELLO, {profile.name} 👋</p>
                </div>  
            )}
            {profile && (
                <button
                    className="font-bold absolute top-12 right-9 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            )}
        </div>
    );
};

export default Header;
