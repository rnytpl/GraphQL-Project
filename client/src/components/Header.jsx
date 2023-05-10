import logo from "@/assets/GraphQL.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project MGMT</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
