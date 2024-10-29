import {createBrowserRouter,RouterProvider} from "react-router-dom";
const Body=()=>{
    const approuter=createBrowserRouter([
        {
            path:'/',
            element:'<Login/>'
        },
        {
            path:'',
            element:'',
        }
    ])
    return <div>
    <RouterProvider router={approuter}/>
    </div>
}
export default Body;