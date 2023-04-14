import {Route, Routes} from "react-router-dom";
import Header from './Header'
import ShowItems from "./Components/ShowItems";
import InputItems from "./Components/InputItems";
import App from "./App";
function Main(){

    return(
        <>
            <main>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route index element={<Asd/>} /> 
                        <Route path="about" element={<App/>} />

                    </Route>
                </Routes>


            </main>
        </>
    )
}

function Asd(){
    return(<h1>Главная страница, без базы данных</h1>)
}

export default Main;