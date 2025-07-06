import { useParams } from "react-router";
export default function UserParams(){
 const {params} = useParams()
 return(
    <div className="bg-gray-700 w-100 text-center text-bold text-3xl text-white flex flex-col justify-center items-center">
        <p>
        MY CAPTURED PARAM: {params}
        </p>
    </div>
 )
}