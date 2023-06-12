import React, {useState} from 'react'

const Simpsons = () => {
    const [parametros, setParametros] = useState({
        "funcion": "",
        "intervalos": "",
        "inicio": "",
        "fin": ""
    })

    return(
        <div className="flex flex-col justify-center items-center min-h-50 bg-blue-400 m-6" style={{border: 'solid 4px', borderRadius: '8px 4px 8px 4px'}}>
            <div className="flex-2 text-3xl m-4 font-bold">
                Método Simpson
            </div>
            <div className="flex-1 flex flex-row flex-wrap justify-center text-2xl m-10 text-2lg">
                <div className="min-w-50 m-3">
                    <label className="m-1" htmlFor="funcion">Función: {'f(x) '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="m-1 px-2 bg-blue-200"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.funcion}
                        onChange={(e) => setParametros((prevState) => ({...prevState, funcion: e.target.value}))}
                    />
                </div>
                <div className="min-w-50 m-3">
                    <label className="m-1" htmlFor="intervalos">Numero de Intervalos: {'n (par) '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="m-1 px-2 bg-blue-200"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.intervalos}
                        onChange={(e) => setParametros((prevState) => ({...prevState, intervalos: e.target.value}))}
                    />
                </div>
                <div className="min-w-50 m-3">
                    <label className="m-1" htmlFor="inicio">Inicio: {'a '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="m-1 px-2 bg-blue-200"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.inicio}
                        onChange={(e) => setParametros((prevState) => ({...prevState, inicio: e.target.value}))}
                    />
                </div>
                <div className="min-w-50 m-3">
                    <label className="m-1" htmlFor="fin">Fin: {'b '}</label>
                    <input 
                        type="text"
                        name="funcion"
                        className="m-1 px-2 bg-blue-200"
                        style={{border: 'solid 2px', borderRadius: '4px 3px 4px 3px'}}
                        value={parametros.fin}
                        onChange={(e) => setParametros((prevState) => ({...prevState, fin: e.target.value}))}
                    />
                </div>
            </div>
            <div className="flex-2 text-2xl m-4 font-bold">
                <button style={{border: 'solid 2px', borderRadius: '8px 4px 8px 4px'}} className="px-6 m-4 bg-teal-400 hover:bg-teal-300 hover:font-black" >Calcular</button>
            </div>
        </div>
    )
}

export default Simpsons;