import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Conteudo from './pages/Conteudo'

function Router() {

    return(
        <Routes>
            <Route 
                path="/"
                element={<Home />}
            />
            <Route 
                path="/conteudo"
                element={<Conteudo />}

            />
        </Routes>
    )
}