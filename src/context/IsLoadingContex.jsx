import { useState } from "react";
import { createContext } from "react";

export const IsLoadingContext = createContext()

export const IsLoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)



    return (
        < IsLoadingContext.Provider value={{ isLoading, setIsLoading }} >
            {children}
        </IsLoadingContext.Provider >
    )


}

