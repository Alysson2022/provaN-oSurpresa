import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from "./acai";
import Gramas from './gramas'
import Libra from "./libra";
import Salario from "./salario";
import Combustivel from "./combustivel";
import Temperatura from "./febre";

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
            </Routes>
        </BrowserRouter>
    )
    
}