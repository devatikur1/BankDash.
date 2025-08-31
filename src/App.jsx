import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/userLogedSection/Dashboard";
import { SideOptionAction } from "./contexts/SideOptionAction";
import Transactions from "./pages/userLogedSection/Transactions";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
};