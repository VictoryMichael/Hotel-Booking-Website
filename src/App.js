import "./index.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';




function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home />} /> 
    <Route path="Hotels" element={<List/>} />
    <Route path="Avalibility" element={<Hotel />} />




    </Routes>




</BrowserRouter> 


    </div>
  );
}

export default App;
