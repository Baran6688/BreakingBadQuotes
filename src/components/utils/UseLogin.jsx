import { useState } from "react";
import UseAuthContex from "./UseAuthContex";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const {dispatch} = UseAuthContex()

    const login = async (email, password) => {
        setError(null)
        const res = await fetch("/api/user/login", {
            method:"POST",
            headers:  {"Content-Type" : "application/json"},
            body: JSON.stringify({email,password})
        })

        const json=await res.json()

        if(!res.ok) {
            setError(json.error)
        }
        if(res.ok) {
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({type: "LOGIN",payload: json})
            setError("null")
        }
    }

    return {login, error}
}