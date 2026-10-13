import { useState } from "react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

return ( <header className="navbar"> <div className="nav-container">

    <a href="#home" className="logo" onClick={closeMenu}>
  <img
    src="https://stackbros.in/bookinga/landing/assets/images/logo.svg"
    alt="Booking"
    className="navbar-logo"
  />
</a>

    {/* Desktop Navigation */}
    <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
      <a href="#home" onClick={closeMenu}>
        Home
      </a>

      <a href="#vehicles" onClick={closeMenu}>
        Vehicles
      </a>

      <a href="#features" onClick={closeMenu}>
        Features
      </a>

      <a href="#faq" onClick={closeMenu}>
        FAQ
      </a>

      <a href="#contact" onClick={closeMenu}>
        Contact
      </a>

      <button
        className="language-btn"
        type="button"
        onClick={() => alert("Language selection coming soon!")}
      >
        <i className="fa-solid fa-globe"></i>
        EN
      </button>

      <button
        className="login-btn"
        type="button"
        onClick={() => alert("Login feature coming soon!")}
      >
        Login
      </button>
    </nav>

    <button
      className="mobile-menu-btn"
      type="button"
      aria-label="Toggle menu"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <i
        className={`fa-solid ${
          menuOpen ? "fa-xmark" : "fa-bars"
        }`}
      ></i>
    </button>

  </div>
</header>
);
}

export default Navbar;
