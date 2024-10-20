import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home.pages';
import PlayersTable from "./pages/planilla.pages";
import Login from "./pages/login.pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/home" element={<Home />} />
          <Route path="planilla" element={<PlayersTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
