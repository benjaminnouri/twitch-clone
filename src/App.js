import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StreamPage from "./pages/StreamPage";
import LiveStream from "./pages/LiveStream";
import ProfilePage from "./pages/ProfilePage";
import Directory from "./pages/Directory";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StreamPage" element={<StreamPage />} />
          <Route path="/LiveStream" element={<LiveStream />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/Directory" element={<Directory />} />
          <Route path="/Wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
