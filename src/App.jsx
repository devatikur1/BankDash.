import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/userLogedSection/Dashboard";
import Transactions from "./pages/userLogedSection/Transactions";
import SearchBox from "./pages/searchBox";

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
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
};