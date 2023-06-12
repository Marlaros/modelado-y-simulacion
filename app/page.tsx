"use client"
import React, {useState} from "react";
import Rectangulos from "./components/Rectangulos";
import Trapecios from "./components/Trapecios";
import Simpsons from "./components/Euler";
import Montecarlo from "./components/Montecarlo";

enum Method{
  rectangulos = "Rectángulos",
  trapecios = "Trapecios",
  simpsons = "Simpsons",
  montecarlo = "Montecarlo"
}

export default function Home() {

  const [method, setMethod] = useState(Method.rectangulos);

  const renderMethod = () => {
    switch(method){
      case Method.rectangulos:
        return <Rectangulos />
      case Method.trapecios:
        return <Trapecios />
      case Method.simpsons:
        return <Simpsons />
      case Method.montecarlo:
        return <Montecarlo />
      default:
        return <>Some method</>
    }
}

  return (
    <main className="flex flex-col items-center justify-between p-24 bg-teal-100 min-h-screen">
      <div className="flex-2 font-bold font-black text-4xl ">
        Modelado y Simulación
      </div>
      <div className="m-6 flex-2 font-bold font-black text-2xl ">
        Cáclulo de Integrales - Métodos de Aproximación
      </div>
      <div className="m-4 flex-2 flex flex-row flex-wrap items-center justify-center" >
        <button 
          className="flex-1 m-6 px-20 bg-teal-400 hover:bg-teal-200 font-bold h-10 text-2xl"
          onClick={() => setMethod(Method.rectangulos)}
          style={{boxShadow: '2px 3px 2px 3px rgba(0,128,128,0.11)', borderRadius: '4%', minHeight: '50px'}}
        >
          Rectángulos
        </button>
        <button  
          className="flex-1 m-6 px-20 bg-teal-400 hover:bg-teal-200 font-bold h-10 text-2xl"
          onClick={() => setMethod(Method.trapecios)}
          style={{boxShadow: '2px 3px 2px 3px rgba(0,128,128,0.11)', borderRadius: '4%', minHeight: '50px'}}
        >
          Trapecios
        </button>
        <button  
          className="flex-1 m-6 px-20 bg-teal-400 hover:bg-teal-200 font-bold h-10 text-2xl"
          onClick={() => setMethod(Method.simpsons)}
          style={{boxShadow: '2px 3px 2px 3px rgba(0,128,128,0.11)', borderRadius: '4%', minHeight: '50px'}}
        >
          Euler
        </button>
        <button  
          className="flex-1 m-6 px-20 bg-teal-400 hover:bg-teal-200 font-bold h-10 text-2xl"
          onClick={() => setMethod(Method.montecarlo)}
          style={{boxShadow: '2px 3px 2px 3px rgba(0,128,128,0.11)', borderRadius: '4%', minHeight: '50px'}}
        >
          Montecarlo
        </button>
      </div>
      <div className="flex-1 w-full max-w-5xl items-center justify-between font-mono text-md divide-black">
        {renderMethod()}
      </div>
    </main>
  )
}
