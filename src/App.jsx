import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
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









function App() {


  return (

    <>
      <Login/>
    </>
>>>>>>> cbe5d73e7bf5e7a70c90d2f42837096d468884ca
  )
}

export default App
