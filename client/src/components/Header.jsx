import logo from "@/assets/GraphQL.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
};
export default Header;