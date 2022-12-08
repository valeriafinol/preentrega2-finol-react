import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div>
        <NavLink to="/">
          <h1 className="brandTitle h1Nav">The Clothing Store</h1>
        </NavLink>
      </div>
      <div>
        <nav>
          <ul className="ulNav">
            <li>
              <NavLink to="/category/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/category/women">Women</NavLink>
            </li>
            <li>
              <CartWidget
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="cart"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
