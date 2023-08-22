import { useState } from "react"
import UseSignUp from "../utils/UseSignUp"

export const SignUP = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const {signup, error} = UseSignUp

    const handleSubmit= async() => {
        e.preventDefault()
        await signup(name,email,password)
    }

    return (
        <>
         <form className="login" onSubmit={handleSubmit}>
                 <h3>Sign Up:</h3>
                 <label>Email: </label>
                 <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
 
                 <label>Password: </label>
                 <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
 
 
                 <button>Login</button>
                 {error && <div className="error">{error}</div>}
 
             </form>
             </>
     )
}