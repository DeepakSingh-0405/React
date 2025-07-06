import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Card(){
    const {user} = useContext(UserContext)

    if(!user) return <div style={{marginTop:20}} > Please Login to see credentials </div>
    
    return <div style={{marginTop:20}} > Username: {user.username} <br />password: {user.password}</div>
}