import { useState } from "react";
import { UseAuthContext } from "./UseAuthContex";

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const { dispatch } = UseAuthContext()

    const signup = async (name, email, password) => {


        const res = await fetch("/api/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })



        const json = await res.json()
        console.log(json)

        if (!res.ok) {
            setError(json.error)
        }

        if (res.ok) {
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({ type: "LOGIN", payload: json })
            setError(null)
        }
    }
    return { signup, error }
}

