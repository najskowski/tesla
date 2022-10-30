import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelS from './Components/Model-S/ModelS'
import Model3 from './Components/Model-3/Model3';
import ModelX from './Components/Model-X/ModelX';
import ModelY from './Components/Model-Y/ModelY';
import Header from './Components/Header/Header'
import Home from './Pages/Home';
import './App.css'
import Buy from "./Pages/Buy";
import Summary from "./Pages/Summary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="S" element={<ModelS renderButton={false} />} />
            <Route path="3" element={<Model3 renderButton={false} />} />
            <Route path="X" element={<ModelX renderButton={false} />} />
            <Route path="Y" element={<ModelY renderButton={false} />} />
            <Route path="buy" element={<Buy />} />
            <Route path="summary" element={<Summary />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
