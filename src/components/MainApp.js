import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login"; 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
       
    },
   
]);

const MainApp = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
            <RouterProvider router={router} />
        </div>
    );
};

export default MainApp;
