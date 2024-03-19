import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Modelo from './paginas/Modelos'
import Herramientas from './paginas/Herramientas'
import Configuracion from './paginas/Configuracion'

import {AuthProvider} from './context/AuthProvider'
import {ModelosProvider} from './context/ModelosProvider'
import {HerramientasProvider} from './context/HerramientasProvider'
import {ConfiguracionesProvider} from './context/ConfiguracionesProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <ModelosProvider>
          <HerramientasProvider>
          <ConfiguracionesProvider>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="olvide-password" element={<OlvidePassword />} />
                    <Route path="olvide-password/:token" element={<NuevoPassword />} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route>
                <Route path="/registrar" element={<RutaProtegida />}>
                    <Route index element={<Registrar />} />
                </Route>
                <Route path="/modelos" element={<RutaProtegida />}>
                    <Route index element={<Modelo />} />
                </Route>
                <Route path="/herramientas" element={<RutaProtegida />}>
                    <Route index element={<Herramientas />} />
                </Route>
                <Route path="/configuraciones" element={<RutaProtegida />}>
                    <Route index element={<Configuracion />} />
                </Route>
            </Routes>
          </ConfiguracionesProvider>
          </HerramientasProvider>
          </ModelosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
