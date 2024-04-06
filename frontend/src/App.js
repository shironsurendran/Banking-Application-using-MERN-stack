import Navbars from "./nav.js";
import Create from "./create.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Deposit from "./deposit.js";
import Login from "./login.js";
import Withdraw from "./withdraw.js";
import Alldata from "./alldata.js";
import './badbank.css';

export default function App() {
  return (
    <>
      <HashRouter>
          <Navbars />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
      </HashRouter>
    </>
  );
}

