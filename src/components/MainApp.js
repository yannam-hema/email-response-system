import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import QueryAndResponse from "./QueryAndResponse";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <div>Page not found</div>,
    },
    {
        path: '/query',
        element: <QueryAndResponse />,
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
