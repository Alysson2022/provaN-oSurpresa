import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acai from "./acai";
import Gramas from './gramas'
import Libra from "./libra";

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/acai' element ={<Acai/>}/>
                <Route path='/gramas' element ={<Gramas/>}/>
                <Route path='/libras' element ={<Libra/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}