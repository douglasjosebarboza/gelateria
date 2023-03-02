import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Sabores from "./pages/sabores"
import Sobre from "./pages/sobre"

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exatc path="/" element={ <Home />} />
                <Route path="/sabores" element={ <Sabores /> }/>
                <Route path="/sobre" element={ <Sobre /> }/>
            </Routes>
        </BrowserRouter>
    )
}