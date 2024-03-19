import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth'

const ModelosContext = createContext();

const ModelosProvider = ({children}) => {

    const [alerta, setAlerta] = useState({});
    const { auth } = useAuth()

    console.log("Auth: "+ auth)

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }
   

    return (
        <ModelosContext.Provider
            value={{
                mostrarAlerta,
                alerta,
                auth,
              
            }}
        >{children}
        </ModelosContext.Provider>
    )
}
export { 
    ModelosProvider
}

export default ModelosContext