import { useContext } from "react";
import { AuthContex } from "../../context/AuthContext";

export const UseAuthContext = () => {
    const context = useContext(AuthContex)

    if (!context) {
        throw Error("USE AUTH CONTEXT")
    }
    return context
}