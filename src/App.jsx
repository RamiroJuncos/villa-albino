import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
<<<<<<< HEAD
<<<<<<< HEAD
import Login from './pages/home.pages'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
=======
import Login from "./pages/login.pages";









=======
import Home from './pages/home.pages'
import Logue from "./pages/login.form";
>>>>>>> master
function App() {
  return (
<<<<<<< HEAD

    <>
      <Login/>
    </>
>>>>>>> cbe5d73e7bf5e7a70c90d2f42837096d468884ca
=======
<BrowserRouter>
<Routes>
  <Route path="/" element={<Logue/>}/>
  <Route path="" element= {<Home/> }/>
</Routes>
</BrowserRouter>
>>>>>>> master
  )
}

export default App
