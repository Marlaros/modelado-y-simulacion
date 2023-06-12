"use client"
import React, { useState } from "react";

export const useRectangle = (parametros: any) => {
    const [loading, setLoading] = useState(false)
    const {funcion, intervalos, inicio, fin} = parametros;

    const expresionACodigo = (fDeX: string) => { // Esto deben convertir la funcion a código y evaluarla en el punto x
        return (x: number) => x;
    }
    
    const calculateRectangle = () => {
        try{
            setLoading(true)
            let a = parseFloat(inicio);
            let b = parseFloat(fin);
            let n = parseFloat(intervalos);

            let result : number = 0;
            const h : number = (b - a) / n;

            for(let i = a; i < b; i += h){
                result += expresionACodigo(funcion)(i);
            }

            setLoading(false);
            return result / n;
        }
        catch(err){
            setLoading(false);
            return "Error al calcular: " + JSON.stringify(err);
        }
        
    }

    return {loading, calculateRectangle};

} 