import Header from "./Header";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
function Login() {
    const { profile, login } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await login(); 
        //navigate('/query'); 
    };

    if (profile) {
        navigate('/query');
    }
    return (
        <div>
            <Header />
            <div className="h-screen flex flex-col justify-center items-center">
                <button
                    className="text-xl text-purple-600 font-bold p-3 rounded-lg border border-purple-600 hover:bg-purple-600 hover:text-white transition"
                    onClick={handleLogin}
                >
                    Sign in with Google 🚀
                </button>
            </div>
        </div>
    );
}

export default Login;