import React from 'react';
import Header from "./Header";
const QueryAndResponse = () => {
    return (
        <div>
       <Header/>     
        <div className="">
            <h1 className=" py-2 text-2xl font-bold text-purple-600">Query</h1>
            <textarea rows={10} cols={150}></textarea>
        </div>
        <button className=' my-2 p-2 text-2xl font-bold text-purple-600 bg-white rounded-lg'>Submit</button>
        </div>
    );
};

export default QueryAndResponse;
