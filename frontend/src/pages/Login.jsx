import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Schneggi" && password === "LoveYou") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-input">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
