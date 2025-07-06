import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github(){
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/DeepakSingh-0405')
    //     .then((res)=>res.json())
    //     .then((response)=> setData(response))
    // },[])
    const data = useLoaderData()
    return(
        <div className="p-5 w-full bg-gray-700 flex justify-between">
            <img src={data.avatar_url} alt="" height={40}/>
            <p className="flex flex-col justify-center items-center text-white text-4xl text-bold left-50">Public Repos: {data.public_repos}</p>
             
        </div>
    )
}
4
export async function loaderData() {
   const res = await fetch('https://api.github.com/users/DeepakSingh-0405')
   return res.json()
}