import { useContext } from "react";
import { AuthContex } from "../../context/AuthContext";

export default UseAuthContext = () => {
    const context = useContext(AuthContex)

    if(!context) {
        throw Error("USE AUTH CONTEXT")
    }
    return context
}