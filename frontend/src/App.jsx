import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Start from "./pages/Start";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth")
  );

  return (
    <>
    <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Routes>
        <Route path="/rating" element={(<Home searchTerm={searchTerm}/>)} />
        <Route path="/home" element={(<Start searchTerm={searchTerm}/>)} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        {/* Login Page check */}
        {/*<Route path="/rating" element={isAuthenticated ? (<Home searchTerm={searchTerm}/>) : (<Navigate to="/login" replace />)} />*/}
        {/*<Route path="/home" element={isAuthenticated ? (<Start searchTerm={searchTerm}/>) : (<Navigate to="/login" replace />)} />*/}
        {/*<Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />*/}
        {/*<Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />*/}
      </Routes>
    </>
  );
}

export default App;
