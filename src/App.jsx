import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import SearchBox from "./pages/searchBox";
import Dashboard from "./pages/userLogedSection/Dashboard";
import Transactions from "./pages/userLogedSection/Transactions";

export default function App() {
  return (
    <>
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
};