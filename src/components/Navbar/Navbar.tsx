import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <FontAwesomeIcon
            icon={faPersonBooth}
            className="text-white-main text-4xl"
          />
          <NavLink to="/voting-info">Voting Info</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
