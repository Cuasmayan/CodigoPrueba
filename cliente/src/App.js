import { BrowserRouter ,Routes, Route } from "react-router-dom";
import LogIn from './LogIn/LogIn.js';
import Milibreta from './miLibreta/miLibreta';
import Crear from './commonComponents/crear';
import Edit from './commonComponents/edit';




export default function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LogIn/>} ></Route>
        <Route path="/miLibreta" element={<Milibreta/>} ></Route>
        <Route path="/crear" element={<Crear/>} ></Route>
        <Route path="/editar" element={<Edit/>} ></Route>
      </Routes>

    </BrowserRouter>

    

  );
}