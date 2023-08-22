import { createContext, useReducer } from "react";

export const AuthContex = createContext()

export default AuthReducer =(state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload};
        

        case "LOGOUT":
            return {user: null}
    
        default:
            return {state}
    }
}


export const AuthContexProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer, {user: null})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
    
        if (user) {
          dispatch({ type: "LOGIN", payload: user });
        }
      }, []);



    
    return(
    <AuthContex.Provider value={{...state,dispatch}}>
        {children}
    </AuthContex.Provider>
    )
   
}