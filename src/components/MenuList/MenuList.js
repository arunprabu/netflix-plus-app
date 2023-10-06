import { Link } from "react-router-dom";

// Functional component with Arrow Function
const MenuList = () => {
  // must return JSX
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          User Management App
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

// exporting the component
export default MenuList;
