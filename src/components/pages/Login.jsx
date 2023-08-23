import { useEffect } from "react"
import { useState } from "react"
import { Navigate, redirect } from "react-router-dom"
import { UseAuthContext } from "../utils/UseAuthContex"
import { useLogin } from "../utils/UseLogin"


const Login = ({ Message } = Props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [messaage, setMessage] = useState(null)

    const { login, error } = useLogin()

    const { user } = UseAuthContext()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }



    return (
        <>

            <form className="login" onSubmit={(e) => handleSubmit(e)}>
                <h3>Login</h3>
                {Message &&
                    <h5>
                        {Message}
                    </h5>
                }
                <label>Email: </label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />

                <label>Password: </label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />


                <button className="btn btn-light mt-3">Login</button>
                {error && <div className="error">{error}</div>}



            </form>
        </>
    )
}

export default Login