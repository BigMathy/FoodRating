import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import "../css/NavBar.css";
import { MdOutlineFastfood } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";

function NavBar({ searchTerm, onSearchChange }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <Link className="navbar-logo" to="/home"><PiBowlFood size="32px" style={{ transform: 'rotate(5deg)' }} /> schneggi<span className="highlight">essen</span></Link>
                </div>

                {location.pathname === "/rating" && (
                    <div className="search">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search restaurants..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                )}

                <div className="navbar-account" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <FaUserCircle className="account-icon" />
                    {dropdownOpen && (
                        <div className="account-dropdown">
                            <p>Are you sure?</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
