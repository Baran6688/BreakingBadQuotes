import { useState } from "react";
import UseAuthContex from "./UseAuthContex";

const  UseSignUp = () => {
    const [ error, setError] = useState(null)
    const {dispatch} =UseAuthContex()

    const signup = async (email,password,name) => {
        const res = await fetch("/api/user/signup",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name,email,password})
        })

        const json = res.json()

        if(!res.ok) {
            setError(json.error)
        }

        if(res.ok){
            localStorage.setItem(JSON.stringify(json))
            dispatch({type: "LOGIN", payload: json})
            setError(null)
        }

        return {signup, error}
    }
}

export default UseSignUp