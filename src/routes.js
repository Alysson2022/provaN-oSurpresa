import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from "./exercicios/acai";
import Gramas from './exercicios/gramas'
import Libra from "./exercicios/libra";
import Salario from "./exercicios/salario";
import Combustivel from "./exercicios/combustivel";
import Temperatura from "./exercicios/febre";
import Orcamento from "./exercicios/orcamento";
import IngressoCinema from "./exercicios/ingresso";

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/acai' element ={<Acai/>}/>
                <Route path='/gramas' element ={<Gramas/>}/>
                <Route path='/libras' element ={<Libra/>}/>
                <Route path='/salario' element ={<Salario/>}/>
                <Route path='/combustivel' element ={<Combustivel/>}/>
                <Route path='/temperatura' element ={<Temperatura/>}/>
                <Route path='/orcamento' element ={<Orcamento/>}/>
                <Route path='/cinema' element ={<IngressoCinema/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}