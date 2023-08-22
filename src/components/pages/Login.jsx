import { useState } from "react"
import { useLogin } from "../utils/UseLogin"


const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, error} = useLogin()

    const handleSubmit =async(e) => {
        e.preventDefault()
        await login(email,password)
    }

    return (
       <>
        <form className="login" onSubmit={handleSubmit}>
                <h3>Login</h3>
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

export default Login