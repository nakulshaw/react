import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data=useLoaderData();
    // const [data,setData]=useState(0);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/nakulshaw")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[data])
    return(
        <>
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">Github followers:{data.followers}</div>
        <img src={data.avatar_url} alt="Github pic" width={300}/>
        </>
    )
}

export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/nakulshaw");
    return response.json();

}