import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/features" element={<Features/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       
    </Routes>
    </BrowserRouter>
    )
     }
export default App
