"use client"
import React, { useState } from 'react'
import { useRectangle } from '../hooks/useRectangle'

const Rectangulos = () => {
    const [parametros, setParametros] = useState({
        "funcion": "",
        "intervalos": "",
        "inicio": "",
        "fin": ""
    })
    const [result, setResult] = useState(null as any)
    const {loading, calculateRectangle} = useRectangle(parametros);

    const handleClick = () => {
        const res = calculateRectangle();
        setResult(res);
    }

    return(
        <div className="flex flex-col justify-center items-center min-h-50 bg-blue-400 m-6" style={{border: 'solid 4px', borderRadius: '8px 4px 8px 4px'}}>
            <div className="flex-2 text-3xl m-4 font-bold">
                Método de Rectangulos
            </div>
            <div style={{minWidth: '85%'}} className="flex-1 flex flex-col justify-center items-center text-2xl m-10 text-2lg">
                <div style={{minWidth: '85%'}} className="flex-1 flex flex-row flex-wrap justify-center items-center min-w-max m-3">
                    <label className="flex-1 m-1" htmlFor="funcion">Función: {'f(x) '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="flex-1 m-1 px-2 bg-blue-200 text-center"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.funcion}
                        onChange={(e) => setParametros((prevState) => ({...prevState, funcion: e.target.value}))}
                    />
                </div>
                <div style={{minWidth: '85%'}} className="flex-1 flex flex-row flex-wrap justify-center items-center min-w-max m-3">
                    <label className="flex-1 m-1" htmlFor="intervalos">Numero de Intervalos: {'n '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="flex-1 m-1 px-2 bg-blue-200 text-center"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.intervalos}
                        onChange={(e) => setParametros((prevState) => ({...prevState, intervalos: e.target.value}))}
                    />
                </div>
                <div style={{minWidth: '85%'}} className="flex-1 flex flex-row flex-wrap justify-center items-center min-w-max m-3">
                    <label className="flex-1 m-1" htmlFor="inicio">Inicio: {'a '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="flex-1 m-1 px-2 bg-blue-200 text-center"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.inicio}
                        onChange={(e) => setParametros((prevState) => ({...prevState, inicio: e.target.value}))}
                    />
                </div>
                <div style={{minWidth: '85%'}} className="flex-1 flex flex-row flex-wrap justify-between items-center min-w-max m-3">
                    <label className="flex-1 m-1" htmlFor="fin">Fin: {'b '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="flex-1 m-1 px-2 bg-blue-200 text-center"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.fin}
                        onChange={(e) => setParametros((prevState) => ({...prevState, fin: e.target.value}))}
                    />
                </div>
            </div>
            <div className="flex-2 text-2xl m-4 font-bold">
                <button 
                    style={{border: 'solid 2px', borderRadius: '8px 4px 8px 4px'}}
                    className={`px-6 m-4 bg-teal-400 hover:bg-teal-300 hover:font-bold`}
                    disabled={loading}
                    onClick={() => handleClick()}
                >
                    {loading ? "Calculando..." : "Calcular"}
                </button>
            </div>
            {
                result ? (
                    <div className="flex-2 text-2xl m-4 font-bold">
                        Resultado: {result}
                    </div>
                ) : 
                <></>
            }
            
        </div>
    )
}

export default Rectangulos;