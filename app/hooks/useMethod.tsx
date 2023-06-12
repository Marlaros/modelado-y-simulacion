"use client"
import React, { useState, Dispatch, SetStateAction, createContext } from "react";


export const MethodContext = createContext(undefined as any)

export const useMethod = () => {
    enum Method{
        rectangulos = "Rectángulos",
        trapecios = "Trapecios",
        simpsons = "Simpsons",
        montecarlo = "Montecarlo"
    }

    const MethodProvider = ({
        children,
      }: {
        children: React.ReactNode
      }) => {
        const [method, setMethod] : [Method, Dispatch<SetStateAction<Method>>] = useState(Method.rectangulos as any)    

        return(
            <MethodContext.Provider value={{method, setMethod}}>
                {children}
            </MethodContext.Provider>
        )
    }

    return {Method, MethodProvider};
} 