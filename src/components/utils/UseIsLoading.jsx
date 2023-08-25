import { useContext } from "react";
import { IsLoadingContext } from "../../context/IsLoadingContex";


export const UseIsLoading = () => {
    const context = useContext(IsLoadingContext)


    if (!context) {
        throw Error("PLEASE USE CONTEXT CORRECTLY!!")
    }
    return context
}


