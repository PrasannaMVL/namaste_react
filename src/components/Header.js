import { CDN_URL} from "../utils/constants";
const Header = () => {
  return (
    <div className="header-component">
      <img
        className="logo"
        src= {CDN_URL}
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;