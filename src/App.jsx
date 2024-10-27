import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgotPw from "../src/components/Fragments/ForgotPw"; // Buat halaman ForgotPw
import SignInPage from "./pages/signIn";
import DashboardPage from "./pages/dashboard";

const App = () => (
  <Router>
    <Routes>
      <Route path="//" element={<DashboardPage/>}/>
      <Route path="/" element={<SignInPage />} />
      <Route path="/lali" element={<ForgotPw />} />
    </Routes>
  </Router>
);

export default App;
