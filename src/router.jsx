import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Experience from "./pages/Experience";
import MapOfSectors from "./pages/MapOfSectors"; 
import Information from "./pages/Information";
import Ticket from "./pages/Ticket";
import YourTicket from "./pages/YourTicket";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/experiencia" element={<Experience/>} />
                <Route path="/mapa" element={<MapOfSectors/>} />
                <Route path="/informacoes" element={<Information/>} />
                <Route path="/seuingresso" element={<YourTicket/>} />
                <Route path="/ingresso" element={<Ticket/>} />
            </Routes>
        </BrowserRouter>
    )
}

