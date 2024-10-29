import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const[signin,setsignin]=useState(true);
    const handlesigninpage=()=>{
        setsignin(!signin);
        console.log(signin);
    }
    return (
    <div>
        <Header />
        <div className="flex  justify-center mt-20">
            <form onSubmit={(e)=>e.preventDefault()}className="w-2/5 bg-white shadow-md p-4 text-center">
                <h2 className="text-xl font-bold m-2">{signin?"SignIn":"SignUp"}</h2>
                {!signin &&
                <input className="ml-16 block w-3/4 my-9 mx-2 p-2 border" placeholder="Name"  type="text"/>
                 }
                <input className="ml-16 block w-3/4 my-9 mx-2 p-2 border" placeholder="Email"  type="text"/>
                <input className="ml-16 block w-3/4 my-9  mx-2 p-2 border" placeholder="Password" type="password" />
                
                   { !signin && <input className="ml-16 block w-3/4 my-9  mx-2 p-2 border" placeholder="confirm Password" type="password" />}

                <button className="ml-56 block w-1/5 bg-purple-500 text-white py-2 rounded">
                    {signin?"SignIn":"SignUp"}
                </button>
            <p  className="cursor-pointer mt-6" onClick={handlesigninpage}>{signin?"New User? SignUp":"Already User SignIn"}</p>
            </form>
        </div>
        </div>
    );
};

export default Login;
