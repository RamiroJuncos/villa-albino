import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
<<<<<<< HEAD
import Home from './pages/home.pages'
import Logue from "./pages/login.form";
=======
import Login from "./pages/login.pages";








>>>>>>> cbe5d73e7bf5e7a70c90d2f42837096d468884ca

function App() {
<BrowserRouter>
<Routes>
  <Route path="/" element={<Logue/>}/>
  <Route path="" element= {<Home/> }/>
</Routes>

</BrowserRouter>

<<<<<<< HEAD
=======
  return (

    <>
      <Login/>
    </>
  )
>>>>>>> cbe5d73e7bf5e7a70c90d2f42837096d468884ca
}

export default App
